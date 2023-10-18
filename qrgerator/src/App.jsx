import './App.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

import { useState } from 'react';

function App() {
  const [link, setLink] = useState('');
  const [qrLink, setQrLink] = useState('');

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, (err, url) => {
      setQrLink(url);
    });
  };

  function handleQrCode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  };


  return (
    <div className='container'>

      <QRCode value={link} />

      < input value={link} onChange={(e) => handleQrCode(e)} className='input' placeholder='Digite seu Link...' />
      <a className='button' href={qrLink} download={`qrcode.png`}><strong>Baixar Qr Code</strong></a>
    </div>

  );
}



export default App;
