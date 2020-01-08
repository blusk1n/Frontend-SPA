import { Button } from 'reactstrap'


export default ({ children }) => (
    <div>
     <Button color="danger">Danger!</Button>
      { children }
    </div>
  )