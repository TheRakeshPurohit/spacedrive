import { useLibraryMutation, usePlausibleEvent } from '@sd/client';
import { Dialog, UseDialogProps, useDialog } from '@sd/ui';
import { useZodForm } from '@sd/ui/src/forms';
import { usePlatform } from '~/util/Platform';

interface Props extends UseDialogProps {
	onSuccess: () => void;
	locationId: number;
}

export default (props: Props) => {
	const dialog = useDialog(props);
	const platform = usePlatform();
	const submitPlausibleEvent = usePlausibleEvent({ platformType: platform.platform });

	const form = useZodForm();

	const deleteLocation = useLibraryMutation('locations.delete', {
		onSuccess: () => {
			submitPlausibleEvent({ event: { type: 'locationDelete' } });
			props.onSuccess();
		}
	});

	return (
		<Dialog
			form={form}
			onSubmit={form.handleSubmit(() => deleteLocation.mutateAsync(props.locationId))}
			dialog={dialog}
			title="Delete Location"
			description="Deleting a location will also remove all files associated with it from the Spacedrive database, the files themselves will not be deleted."
			ctaDanger
			ctaLabel="Delete"
		/>
	);
};
