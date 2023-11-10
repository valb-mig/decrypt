import Cipher from '@/config/ciphers';

import { DataFormProps } from '@/app/page';

const Helpers = () => {

    const submitCipherForm = (object: DataFormProps, cipher: string) => {
        
        let newObject = Object.assign({}, object);

        let result = '';

        switch (cipher) {

            case 'binary':
                result = Cipher.Binary(object.cipher);
            break;

            default:
            break;
        }

        newObject.decoded = result;
        
        return newObject;
    }

    return { submitCipherForm };
}

export default Helpers;