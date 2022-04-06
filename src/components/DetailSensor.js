import '../styles/DetailSensor.css';

function DetailSensor({ detailSensor }) {
    let type="";
    let value=-1;
    detailSensor.map((element) => {
        type=element.type;
        value=element.data.value;
        return null;

    });
    return (type!=="DOOR")? (
        <div className="detail_sensor">
            <div>
            <ul>
            {detailSensor.map((element,index) => (
                <div  key={index.toString()}>
                    <h3  key={index.toString()+"i"}>{element.name}</h3>
                    Valeur:actuelle
                    <h4  key={index.toString()}>{element.data.values[0]}</h4>
                </div>
            ))}
            <h3>Historique</h3>
            {detailSensor.map((element,index) => (
                <div  key={index.toString()}>{element.data.values.map((element,index)=>(<li className='li_detail' key={index.toString()}>{element}</li>))}</div>
            ))}
        </ul>
        </div>
        </div>
    ) :value===1 ? (
        <div>
            <h2 >La porte est ouvert</h2>
        </div>

    ):(
        <h2> La porte est ferme</h2>
    )
}

export default DetailSensor;