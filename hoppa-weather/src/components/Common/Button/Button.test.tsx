import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('Button component', () => {
	const mockOnPress = jest.fn();

	const renderComponent = () => {
		return render(<Button label='test' onPress={mockOnPress} />);
	};

	it('should render the buttons label', () => {
		const { getByText } = renderComponent();

		expect(getByText('test')).toBeTruthy();
	});

	it('should trigger onPress when clicked', () => {
		const { getByText } = renderComponent();

		fireEvent.press(getByText('test'));
		expect(mockOnPress).toHaveBeenCalled();
	});
});
