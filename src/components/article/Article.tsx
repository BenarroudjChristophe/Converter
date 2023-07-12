import "./article.scss"
interface DataProps {
    dataList: DataObject[];
}

interface DataObject {
    name: string;
    rate: number;
}

export default function Article({dataList}: DataObject){
    return(
        <ul className="dataList">
            <h3>Currencies</h3>
            {dataList.map((d: DataObject) => (
                <>
                <li>{d.name}</li>
                </>
            ))}
            </ul>
    )
}