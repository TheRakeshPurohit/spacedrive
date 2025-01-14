import clsx from 'clsx';
import { Gear, Lock, Plus } from 'phosphor-react';
import { useClientContext } from '@sd/client';
import { Dropdown, DropdownMenu, dialogManager } from '@sd/ui';
import CreateDialog from '../../settings/node/libraries/CreateDialog';

export default () => {
	const { library, libraries, currentLibraryId } = useClientContext();

	return (
		<DropdownMenu.Root
			trigger={
				<Dropdown.Button
					variant="gray"
					className={clsx(
						`text-ink w-full`,
						// these classname overrides are messy
						// but they work
						`!bg-sidebar-box !border-sidebar-line/50 active:!border-sidebar-line active:!bg-sidebar-button ui-open:!bg-sidebar-button ui-open:!border-sidebar-line ring-offset-sidebar`,
						(library === null || libraries.isLoading) && '!text-ink-faint'
					)}
				>
					<span className="truncate">
						{libraries.isLoading ? 'Loading...' : library ? library.config.name : ' '}
					</span>
				</Dropdown.Button>
			}
			// we override the sidebar dropdown item's hover styles
			// because the dark style clashes with the sidebar
			className="dark:bg-sidebar-box dark:border-sidebar-line dark:divide-menu-selected/30 data-[side=bottom]:slide-in-from-top-2 mt-1 shadow-none"
			alignToTrigger
		>
			{libraries.data?.map((lib) => (
				<DropdownMenu.Item
					to={`/${lib.uuid}/overview`}
					key={lib.uuid}
					selected={lib.uuid === currentLibraryId}
				>
					{lib.config.name}
				</DropdownMenu.Item>
			))}
			<DropdownMenu.Separator className="mx-0" />
			<DropdownMenu.Item
				label="	New Library"
				icon={Plus}
				iconProps={{ weight: 'bold', size: 16 }}
				onClick={() => dialogManager.create((dp) => <CreateDialog {...dp} />)}
				className="font-medium"
			/>
			<DropdownMenu.Item
				label="Manage Library"
				icon={Gear}
				iconProps={{ weight: 'bold', size: 16 }}
				to="settings/library/general"
				className="font-medium"
			/>
			<DropdownMenu.Item
				label="Lock"
				icon={Lock}
				iconProps={{ weight: 'bold', size: 16 }}
				onClick={() => alert('TODO: Not implemented yet!')}
				className="font-medium"
			/>
		</DropdownMenu.Root>
	);
};
