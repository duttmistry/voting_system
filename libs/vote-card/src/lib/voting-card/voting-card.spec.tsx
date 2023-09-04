import { render } from '@testing-library/react';

import VotingCard from './voting-card';

describe('VotingCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VotingCard />);
    expect(baseElement).toBeTruthy();
  });
});
