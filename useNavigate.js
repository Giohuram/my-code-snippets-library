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

// The useNavigate() function also gives us the ability to programmatically navigate our users through their history stack. Scenarios like enabling users to go forward or backward in an application, or redirecting users to their previous page after they’ve logged in, are great use cases for this functionality. To navigate a user through their history stack using useNavigate(), we’d pass in an integer to indicate where in the history we’d like to travel. A positive integer navigates forward and a negative integer navigates backward.

// For example:

// navigate(-1) - navigate to the previous URL in the history stack.
// navigate(1) - navigate to the next URL in the history stack.
// navigate(-3) - navigate 3 URLs back in the history stack.
// Below, we can see how the navigate() function is used to enable a “Go Back” button:

import { useNavigate } from `react-router-dom`

export const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(-1)}>
      Go Back
    </button>
  )
}
