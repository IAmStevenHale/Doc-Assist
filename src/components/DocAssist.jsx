import React, { useState, useEffect } from 'react';
import '../styles/docAssist.css';
import '../styles/search.css';
import MBSData from '.././MBS_JSON_DATA/MBS-JSON-20220701.json';
import MBSItem from './MBSItem';
import CommonWords from '.././MBS_JSON_DATA/commonWords.json';

const DocAssist = () => {
  const [notes, setNotes] = useState('');
  const [doctorTypeFilter, setDoctorTypeFilter] = useState([]);
  const [coins, setCoins] = useState([]);
  const MBSItems = MBSData.MBS_XML.Data;
  const commonWords = CommonWords.commonWords;

  function handleSubmit(e) {
    e.preventDefault();
    filterMBS();
  }

  function filterMBS() {
    let cleanArray = [];
    //converts all characters to lower case
    let currentNotes = notes.toLowerCase();
    //removes all special characters
    currentNotes.replace(/[^a-zA-Z ]/g, '');
    //converts to array
    currentNotes = currentNotes.split(' ');
    //removes all common words
    currentNotes = currentNotes.filter(function (el) {
      return commonWords.indexOf(el) < 0;
    });
    //rake filter
    for (let i = 0; i < MBSItems.length; i++) {
      if (doctorTypeFilter.includes(MBSItems[i].ProviderType)) {
        cleanArray.push(MBSItems[i]);
      }
      for (let j = 0; j < currentNotes.length; j++) {
        if (MBSItems[i].Description.includes(currentNotes[j])) {
          cleanArray.push(MBSItems[i]);
          // console.log('test');
        }
      }
    }
    console.log(cleanArray);
    // console.log(notes);
    // console.log(doctorTypeFilter);
    // console.log(coins);

    setCoins(cleanArray);
  }

  function handleChange(e) {
    setNotes(e.target.value);
  }

  function handleCheckboxChange(event) {
    let newArray = [...doctorTypeFilter, event.target.id];
    if (doctorTypeFilter.includes(event.target.id)) {
      newArray = newArray.filter((day) => day !== event.target.id);
    }
    setDoctorTypeFilter(newArray);
  }
  return (
    <div className='docAssist'>
      <div className='left'>
        <h1 className='findMBSRebateSuggestionsText'>
          Find MBS Rebate Suggestions
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className='mainForm'>
          <div className='patientNotesForm'>
            <textarea
              type='text'
              onChange={(e) => handleChange(e)}
              placeholder="Enter Patient Notes Here - Don't worry, no data is stored."
              className='patientNotes'
            />
          </div>
          <div className='doctorType'>
            <div className='column'>
              <div className=''>
                <input
                  type='checkbox'
                  name='AD'
                  id='AD'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='AD'>AD - Accredited Dental Practitioner</label>
              </div>
              <div className=''>
                <input
                  type='checkbox'
                  name='AO'
                  id='AO'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='AO'>AO – Accredited Orthodontist</label>
              </div>
              <div className=''>
                <input
                  type='checkbox'
                  name='AOS'
                  id='AOS'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='AOS'>AOS – Approved Oral Surgeon</label>
              </div>
              <div className=''>
                <input
                  type='checkbox'
                  name='C'
                  id='C'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='C'>C – Computerised facilities</label>
              </div>
              <div className=''>
                <input
                  type='checkbox'
                  name='G'
                  id='G'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='G'>G – General Practitioner</label>
              </div>
            </div>

            <div className='column'>
              <div className=''>
                <input
                  type='checkbox'
                  name='HR'
                  id='HR'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='HR'>HR – Hospital Recognised</label>
              </div>
              <div className=''>
                <input
                  type='checkbox'
                  name='NC'
                  id='NC'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='NC'>NC – Non-computerised facilities</label>
              </div>
              <div className=''>
                <input
                  type='checkbox'
                  name='OP'
                  id='OP'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='OP'>
                  OP – Other (non-specialist pathologist)
                </label>
              </div>
              <div className=''>
                <input
                  type='checkbox'
                  name='S'
                  id='S'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='S'>S – Specialist</label>
              </div>

              <div className=''>
                <input
                  type='checkbox'
                  name='SP'
                  id='SP'
                  onClick={(e) => handleCheckboxChange(e)}
                />
                <label htmlFor='SP'>SP – Specialist Pathologist</label>
              </div>
            </div>
          </div>
          <input type='submit' onClick={(e) => handleSubmit(e)} />
        </form>
      </div>
      <div className='right'>
        <h1 className='resultText'>Suggested Rebates</h1>
        <div className='resultContainer'>
          <ul>
            {coins.slice(0, 100).map((item) => (
              <li>
                <MBSItem
                  key={item.ItemNum}
                  ItemNum={item.ItemNum}
                  Description={item.Description}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocAssist;
