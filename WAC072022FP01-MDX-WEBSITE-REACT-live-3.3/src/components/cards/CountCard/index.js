import Style from './CountCard.module.scss'

const CountCard = (props) => {
  const parse = require("html-react-parser");
  const cardsData = props?.props?.data?.length ? props?.props?.data : props?.props?.data ? [props?.props?.data] : [props?.props];
  return (
    <>
    {cardsData?.map((data,index)=>{
      return(
        <div className={Style.countcard} key={index}>
            <h5>{data?.count_value}</h5>
            {data?.description && parse(data?.description)}
        </div>
      )
    })}
    </>
  )
}

export default CountCard