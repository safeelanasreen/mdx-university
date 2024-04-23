import React from 'react';
import Style from './StatCard.module.scss';

const StatCard = (props) => {
  const cardsData = props?.props?.data?.length ? props?.props?.data : props?.props?.data ? [props?.props?.data] : [props];
  return (
    <>
    {cardsData?.map((data,index)=>{
      return(
        <div className={Style.stat_card} style={{"--text-color": data?.color ? data?.color : 'var(--white)',"--background-color": data?.background ? data?.background : 'var(--background-color)'}} key={index}>
          <div className={Style.stat_card_inner}>
              <h3 className={Style.stat_card_count}>{data?.count}</h3>
              <p className={Style.stat_card_description}>{data?.description}</p>
          </div>
        </div>
      )
    })}
    </>
  )
}

export default StatCard;