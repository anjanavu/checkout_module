import React from 'react'
import StyledButton from '../../ui/StyledButton'

const Logout = (props) => {
  return (
    <div style={styles}>
    <p style={{ marginBottom: '20px' }}>Are you sure you want to logout?</p>
      <StyledButton variant='secondary'>Logout </StyledButton>  
      <StyledButton variant='primary'mt={9} onClick={props.handleCloseLogout}>Cancel </StyledButton>  
    
  </div>
  )
}
const styles = {
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '300px',
      margin: 'auto',
      textAlign: 'center',
    }
export default Logout
