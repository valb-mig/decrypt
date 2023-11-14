'use client';

import React, { useState } from 'react';

import Icons  from '@/app/config/icons';
import Input  from '@/components/Input';
import Button from '@/components/Button';

import Helpers from '@/config/helpers';

import 'public/styles/page.css';

export type DataFormProps = {
  cipher: string;
  decoded: string;
}

export default function Home() {

  const { submitCipherForm } = Helpers();

  const [ dataForm, setDataForm ] = useState<DataFormProps>({
    cipher:  '',
    decoded: ''
  })

  const [ chipherType, setChipherType ] = useState<string>('binary');

  return (
    <main>
      <form onSubmit={(e) => { e.preventDefault(); setDataForm(submitCipherForm(dataForm, chipherType))}}>
        <Input.Root 
          Type="textarea"
          Value={dataForm.cipher}
          OnChange={(e) => setDataForm({...dataForm, cipher: e.target.value})}
        >
          <Input.Icon Icon={<Icons.lock/>}/>
          <Input.Title Title="Binary"/>
        </Input.Root>

        <div className='buttons-row'>

          <Button.Root 
            Type='button' 
            OnClick={() => setDataForm({cipher: '', decoded: ''})}
          >
            <Button.Title Title='Clean'/>
          </Button.Root>

          <Button.Root Type='submit'>
            <Button.Title Title='Decode'/>
          </Button.Root>

        </div>

        <Input.Root 
          Type="textarea"
          Value={dataForm.decoded}
          OnChange={(e) => setDataForm({...dataForm, decoded: e.target.value})}
          Disbled={true}
          Placeholder="...The decrypt result will be here!"
        >
          <Input.Icon Icon={<Icons.unLock/>}/>
          <Input.Title Title="Decoded binary"/>
        </Input.Root>
      </form>
      <footer>
        <p>Made by <a href="https://github.com/valb-mig">Valb.Mig</a></p>
      </footer>
    </main>
  )
}
