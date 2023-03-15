import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import FeaturedWork from "./components/FeaturedWork"

afterEach(cleanup)

it('App mounts properly', () => {
  const wrapper = render(<App />)
  expect(wrapper).toBeTruthy()
})

it('Click the React Router Link', () => {
  const wrapper = render(<App />)
  const link = wrapper.container.querySelector('Link');
  if(link){
    fireEvent(link,new MouseEvent('click'));
    expect(link).toHaveBeenCalled();
  }
})

it('Featured work displays properly', () => {
  const mockData = [{'title': 'Bank', 
  'description': `Large Bank`, 
  'imgUrl': `https://fastly.picsum.photos/id/428/1080/500.jpg?hmac=kOZp-Ptx1F02EJJOz9HSBFa3IOO8FRHTsVKUvZRO49I`}];

  const wrapper = render(<FeaturedWork workCards={mockData}/>);

  expect(screen.queryByTestId(`featuredWork`)).toBeDefined();
})

