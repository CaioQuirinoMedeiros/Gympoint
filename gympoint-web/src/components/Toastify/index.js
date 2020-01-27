import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

const Toastify = styled(ToastContainer).attrs({
  autoClose: 3500,
  // pauseOnHover: false,
  className: 'CLASS_NAME',
  toastClassName: 'TOAST_CLASS_NAME',
  bodyClassName: 'BODY_CLASS_NAME',
  progressClassName: 'PROGRESS_CLASS_NAME'
})`
  .CLASS_NAME {
  }

  .TOAST_CLASS_NAME {
    border-radius: 5px;
    min-height: 10px;
    padding: 1rem 1.5rem;
  }

  .Toastify__toast--success {
    background: ${({ theme }) => theme.positive};
  }

  .Toastify__toast--error {
    background: ${({ theme }) => theme.warn};
  }

  .BODY_CLASS_NAME {
    margin: 0;
    font-size: 1.4rem;
  }
`

export default Toastify
