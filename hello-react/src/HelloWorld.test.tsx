import { describe, expect, test } from 'vitest';
import { render,screen } from '@testing-library/react'
import HelloWorld from './HelloWorld';

import '@testing-library/jest-dom/vitest';

// describe('HelloWorld component', () => {
//   test('renders', () => {
//     const rootEl = document.createElement('div');
//     rootEl.id = 'root';
//     document.body.append(rootEl);
//     act(() => {
//       ReactDOM.createRoot(rootEl).render(
//         <HelloWorld />,
//       );  
//     })
//     console.log(document.getElementById('root')!.innerHTML);
//   });
// });

describe('HelloWorld component', () => {
  test('renders', () => {
    render(<HelloWorld name='Romain' />);
  });

  test('renders Hello Romain', () => {
    render(<HelloWorld name='Romain' />);

    // expect(document.body.innerText).toContain('Hello Romain');

    // screen.getByText('Hello Romain !'); 
    // expect(screen.queryByText('Hello Romain !')).not.toBeNull()
    expect(screen.getByText('Hello Romain !')).toBeInTheDocument();
  });

});
