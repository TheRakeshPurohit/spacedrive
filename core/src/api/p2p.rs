use rspc::Type;
use sd_p2p::PeerId;
use serde::Deserialize;
use std::path::PathBuf;

use crate::p2p::P2PEvent;

use super::RouterBuilder;

pub(crate) fn mount() -> RouterBuilder {
	RouterBuilder::new()
		.subscription("events", |t| {
			t(|ctx, _: ()| {
				let mut rx = ctx.p2p.subscribe();
				async_stream::stream! {
					// TODO: Don't block subscription start
					for peer in ctx.p2p.manager.get_discovered_peers().await {
						yield P2PEvent::DiscoveredPeer {
							peer_id: peer.peer_id,
							metadata: peer.metadata,
						};
					}

					// // TODO: Don't block subscription start
					// for peer in ctx.p2p_manager.get_connected_peers().await.unwrap() {
					// 	// TODO: Send to frontend
					// }


					while let Ok(event) = rx.recv().await {
						yield event;
					}
				}
			})
		})
		.mutation("spacedrop", |t| {
			#[derive(Type, Deserialize)]
			pub struct SpacedropArgs {
				peer_id: PeerId,
				file_path: String,
			}

			t(|ctx, args: SpacedropArgs| async move {
				ctx.p2p
					.big_bad_spacedrop(args.peer_id, PathBuf::from(args.file_path))
					.await;
			})
		})
}
