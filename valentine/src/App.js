import React, {useState} from "react";
import './App.css';

export default function ValentineCard(){
  const [yesChecked, setYesChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);

  return(
    <div style={styles.container}>
      <h1 style ={styles.heading}>Cecilia, Will you be my valentine?</h1>

      <div style={styles.checkboxContainer}>
        <label style={styles.checkboxLabel}>
          <div
            style={{...styles.checkbox, ...(yesChecked ? styles.checkboxChecked : {})}}
            onClick={() => setYesChecked(!yesChecked)}
          >
            {yesChecked && <span style={styles.checkmark}>✓</span>}
          </div>
          <span style={styles.labelText}>Yes</span>
        </label>

        <label style={styles.checkboxLabel}>
          <div
            style={{...styles.checkbox, ...(noChecked ? styles.checkboxChecked : {})}}
            onClick={() => setNoChecked(!noChecked)}
          >
            {noChecked && <span style={styles.checkmark}>✓</span>}
          </div>
          <span style={styles.labelText}>No</span>
        </label>
      </div>

      <div style={styles.heartContainer}>
        <div className="heart"></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FFD6E8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  heading:{
    fontSize: '48px',
    color: '#D63384',
    marginBottom: '40px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    display: 'flex',
    gap: '30px',
    marginBottom: '60px',
  },
  checkboxLabel:{
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    fontSize: '24px',
  },
  checkbox: {
    width: '30px',
    height: '30px',
    border: '2px solid #D63384',
    borderRadius: '4px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  checkboxChecked: {
    backgroundColor: '#D63384',
  },
  checkmark: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  labelText: {
    color: '#D63384',
    fontWeight: '600',
  },
  heartContainer: {
    marginTop: '20px',
  },
};