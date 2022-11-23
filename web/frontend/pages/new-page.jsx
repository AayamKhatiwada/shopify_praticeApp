import { Modal, Spinner } from '@shopify/polaris';

export default function ModalExample() {

    return (
        <div style={{ width:"100px" }}>
            <Modal
                open="true"
                small
            >
                <Spinner size="large" />
            </Modal>
        </div>
    );
}