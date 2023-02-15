import { render, screen } from '@testing-library/react';
import { Button } from "shared/ui/Button/Button";

describe('Button', () => {
    test('render test', () => {
        render(<Button>text</Button>);
        expect(screen.getByText('text')).toBeInTheDocument();
    });
});
