// The useNavigate() function returns a navigate function that allows us to specify a path where we’d like to navigate.

import { useNavigate } from `react-router-dom`;

export const ExampleForm = () => {

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form elements */ }
    </form>
  )
}

