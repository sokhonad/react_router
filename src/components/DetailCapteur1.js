import { useState} from 'react'

function DetailCapteur({ detailCapteur }) {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Fermer la Detail</button>
            <h2>Detail de Capteur</h2>
            <div>
            <ul>
            {detailCapteur.map((element,index) => (
                <div  key={index.toString()}>
                    <h3  key={index.toString()+"i"}>{element.name}</h3>
                    Valeur:actuelle
                    <h4  key={index.toString()}>{element.data.values[0]}</h4>
                </div>


            ))}
            <h2>Historique</h2>
            {detailCapteur.map((element,index) => (
                <div  key={index.toString()}>{element.data.values.map((element,index)=>(<li key={index.toString()}>{element}</li>))}</div>
            ))}
        </ul>
            </div>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir la Detail</button>
    )
}

export default DetailCapteur;