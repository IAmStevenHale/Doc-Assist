import React from 'react';
import '../styles/mbsItem.css';

const MBSItem = ({
  ItemNum,
  SubItemNum,
  ItemStartDate,
  ItemEndDate,
  Category,
  Group,
  SubGroup,
  SubHeading,
  //   ItemType,
  //   FeeType,
  //   ProviderType,
  //   NewItem,
  //   ItemChange,
  //   AnaesChange,
  //   DescriptorChange,
  //   FeeChange,
  //   EMSNChange,
  //   EMSNCap,
  //   BenefitType,
  //   BenefitStartDate,
  //   FeeStartDate,
  //   ScheduleFee,
  //   Benefit100,
  //   BasicUnits,
  //   EMSNStartDate,
  //   EMSNEndDate,
  //   EMSNFixedCapAmount,
  //   EMSNMaximumCap,
  //   EMSNDescription,
  //   EMSNChangeDate,
  //   DescriptionStartDate,
  Description,
  //   QFEStartDate,
  //   QFEEndDate,
}) => {
  return (
    <div className='MBSItemContainer'>
      <div className='checkBox'>
        <input type='checkbox' name='select' className='select' />
      </div>

      <div className='MBSItemInfo'>
        <div className='ItemNum'>{ItemNum}</div>
        <div className='SubItemNum'>{SubItemNum}</div>
        <div className='ItemStartDate'>{ItemStartDate}</div>
        <div className='ItemEndDate'>{ItemEndDate}</div>
        <div className='Category'>{Category}</div>
        <div className='Group'>{Group}</div>
        <div className='SubGroup'>{SubGroup}</div>
        <div className='SubHeading'>{SubHeading}</div>
        {/* <div className='ItemType'>{ItemType}</div> */}
        {/* <div className='FeeType'>{FeeType}</div> */}
        {/* <div className='ProviderType'>{ProviderType}</div> */}
        {/* <div className='NewItem'>{NewItem}</div> */}
        {/* <div className='ItemChange'>{ItemChange}</div> */}
        {/* <div className='AnaesChange'>{AnaesChange}</div> */}
        {/* <div className='DescriptorChange'>{DescriptorChange}</div> */}
        {/* <div className='FeeChange'>{FeeChange}</div> */}
        {/* <div className='EMSNChange'>{EMSNChange}</div> */}
        {/* <div className='EMSNCap'>{EMSNCap}</div> */}
        {/* <div className='BenefitType'>{BenefitType}</div> */}
        {/* <div className='BenefitStartDate'>{BenefitStartDate}</div> */}
        {/* <div className='FeeStartDate'>{FeeStartDate}</div> */}
        {/* <div className='ScheduleFee'>{ScheduleFee}</div> */}
        {/* <div className='Benefit100'>{Benefit100}</div> */}
        {/* <div className='BasicUnits'>{BasicUnits}</div> */}
        {/* <div className='EMSNStartDate'>{EMSNStartDate}</div> */}
        {/* <div className='EMSNEndDate'>{EMSNEndDate}</div> */}
        {/* <div className='EMSNFixedCapAmount'>{EMSNFixedCapAmount}</div> */}
        {/* <div className='EMSNMaximumCap'>{EMSNMaximumCap}</div> */}
        {/* <div className='EMSNDescription'>{EMSNDescription}</div> */}
        {/* <div className='EMSNChangeDate'>{EMSNChangeDate}</div> */}
        {/* <div className='DescriptionStartDate'>{DescriptionStartDate}</div> */}
        <div className='Description'>{Description}</div>
        {/* <div className='QFEStartDate'>{QFEStartDate}</div> */}
        {/* <div className='QFEEndDate'>{QFEEndDate}</div> */}
      </div>
    </div>
  );
};

export default MBSItem;
