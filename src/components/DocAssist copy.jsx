// import React, { useState } from 'react';
// import '../styles/docAssist.css';
// import '../styles/search.css';
// import MBSData from '.././MBS_JSON_DATA/MBS-JSON-20220701.json';
// import MBSItem from './MBSItem';
// import CommonWords from '.././MBS_JSON_DATA/commonWords.json';
// import Submit from './Submit';

// const DocAssist = () => {
//   const [notes, setNotes] = useState('');
//   const [doctorTypeFilter, setDoctorTypeFilter] = useState([]);
//   const [coins, setCoins] = useState([]);
//   const [showTop, setShowTop] = useState(100);
//   const MBSItems = MBSData.MBS_XML.Data;
//   let MBSItemsWithScore = [];
//   const commonWords = CommonWords.commonWords;

//   for (let i = 0; i < MBSItems.length; i++) {
//     let newMBSObject = { score: 0, MBS: MBSItems[i] };
//     MBSItemsWithScore.push(newMBSObject);
//   }
//   // console.log(MBSItemsWithScore);
//   function handleSubmit(e) {
//     console.log(coins);
//     e.preventDefault();
//     filterMBS();
//   }

//   function filterMBS() {
//     //converts all characters to lower case
//     let currentNotes = notes.toLowerCase();
//     //removes all special characters
//     currentNotes.replace(/[^a-zA-Z ]/g, '');
//     //converts to array
//     currentNotes = currentNotes.split(' ');
//     //removes all common words
//     currentNotes = currentNotes.filter(function (el) {
//       return commonWords.indexOf(el) < 0;
//     });

//     //set score for each MBS Item
//     for (let i = 0; i < MBSItemsWithScore.length; i++) {
//       if (doctorTypeFilter.includes(MBSItemsWithScore[i].MBS.ProviderType)) {
//         MBSItemsWithScore[i].score += 2;
//       }
//       for (let j = 0; j < currentNotes.length; j++) {
//         if (MBSItemsWithScore[i].MBS.Description.includes(currentNotes[j])) {
//           MBSItemsWithScore[i].score += 1;
//         }
//       }
//     }
//     setCoins([
//       ...new Set(
//         MBSItemsWithScore.sort((a, b) => (a.score > b.score ? -1 : 1)).filter(
//           function (el) {
//             return el.score > 0;
//           }
//         )
//       ),
//     ]);
//   }

//   function handleChange(e) {
//     setNotes(e.target.value);
//   }

//   function handleShowTopChange(e) {
//     if (e.target.id === 'showTop3' && e.target.value === 'on') {
//       setShowTop(3);
//     } else if (e.target.id === 'showTop5' && e.target.value === 'on') {
//       setShowTop(5);
//     } else if (e.target.id === 'showTop10' && e.target.value === 'on') {
//       setShowTop(10);
//     } else if (e.target.id === 'showTop100' && e.target.value === 'on') {
//       setShowTop(100);
//     }
//   }

//   function handleCheckboxChange(event) {
//     let newArray = [...doctorTypeFilter, event.target.id];
//     if (doctorTypeFilter.includes(event.target.id)) {
//       newArray = newArray.filter((day) => day !== event.target.id);
//     }
//     setDoctorTypeFilter(newArray);
//   }
//   return (
//     <div className='docAssist'>
//       <div className='left'>
//         <h1 className='findMBSRebateSuggestionsText'>
//           Find MBS Rebate Suggestions
//         </h1>
//         <form onSubmit={(e) => handleSubmit(e)} className='mainForm'>
//           <div className='patientNotesForm'>
//             <textarea
//               type='text'
//               onChange={(e) => handleChange(e)}
//               placeholder="Enter Patient Notes Here - Don't worry, no data is stored."
//               className='patientNotes'
//             />
//           </div>
//           <fieldset className='doctorType'>
//             <legend>Doctor Type</legend>
//             <div className='column'>
//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='AD'
//                   id='AD'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='AD'>AD</label>
//               </div>
//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='AO'
//                   id='AO'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='AO'>AO</label>
//               </div>
//             </div>
//             <div className='column'>
//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='AOS'
//                   id='AOS'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='AOS'>AOS</label>
//               </div>
//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='C'
//                   id='C'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='C'>C</label>
//               </div>
//             </div>
//             <div className='column'>
//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='G'
//                   id='G'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='G'>G</label>
//               </div>

//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='HR'
//                   id='HR'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='HR'>HR</label>
//               </div>
//             </div>
//             <div className='column'>
//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='NC'
//                   id='NC'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='NC'>NC</label>
//               </div>
//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='OP'
//                   id='OP'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='OP'>OP</label>
//               </div>
//             </div>
//             <div className='column'>
//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='S'
//                   id='S'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='S'>S</label>
//               </div>

//               <div className=''>
//                 <input
//                   type='checkbox'
//                   name='SP'
//                   id='SP'
//                   onClick={(e) => handleCheckboxChange(e)}
//                 />
//                 <label htmlFor='SP'>SP</label>
//               </div>
//             </div>
//           </fieldset>
//           <input type='submit' onClick={(e) => handleSubmit(e)} />
//         </form>
//       </div>
//       <div className='right'>
//         <h1 className='resultText'>Suggested Rebates</h1>
//         <div className='mainForm'>
//           <div className='resultContainer'>
//             <ul>
//               {coins.slice(0, showTop).map((item) => (
//                 <li>
//                   <MBSItem
//                     key={item.MBS.ItemNum}
//                     ItemNum={item.MBS.ItemNum}
//                     Description={item.MBS.Description}
//                     Score={item.score}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <fieldset className='showTo'>
//             <legend>Show Top Suggestions</legend>
//             <div className='column'>
//               <div className=''>
//                 <input
//                   type='radio'
//                   name='showTop'
//                   id='showTop3'
//                   onClick={(e) => handleShowTopChange(e)}
//                 />
//                 <label htmlFor='showTop3'>Show Top 3</label>
//               </div>
//               <div className=''>
//                 <input
//                   type='radio'
//                   name='showTop'
//                   id='showTop5'
//                   onClick={(e) => handleShowTopChange(e)}
//                 />
//                 <label htmlFor='showTop5'>Show Top 5</label>
//               </div>
//             </div>

//             <div className='column'>
//               <div className=''>
//                 <input
//                   type='radio'
//                   name='showTop'
//                   id='showTop10'
//                   onClick={(e) => handleShowTopChange(e)}
//                 />
//                 <label htmlFor='showTop10'>Show Top 10</label>
//               </div>
//               <div className=''>
//                 <input
//                   type='radio'
//                   name='showTop'
//                   id='showTop100'
//                   onClick={(e) => handleShowTopChange(e)}
//                 />
//                 <label htmlFor='showTop100'>Show Top 100</label>
//               </div>
//             </div>
//           </fieldset>
//           <div className='send'>
//             <Submit />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocAssist;
