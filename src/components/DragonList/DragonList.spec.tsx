import { act, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../app/store'
import { DragonsList } from './DragonsList'
import dragonsData from '../../../data/dragons.json'

const dragonsListFactory = (data = dragonsData.dragons) => {
    render(
        <Provider store={store}>
            <DragonsList dragons={data} />
        </Provider>
    );
}

describe('DragonList', () => {
    it('should render DragonList', () => {
        dragonsListFactory();
        const dragonItemsCount = screen.getByTestId('dragons-list-section').childNodes.length
        expect(dragonItemsCount).toBe(dragonsData.dragons.length)
    })

    it('should render the no dragons available', () => {
        dragonsListFactory([]);
        const noDragonsTitle = screen.getByText(/no dragons available/i)
        expect(noDragonsTitle).toBeInTheDocument()
    })

    it('should click on the first dragon card', () => {
        dragonsListFactory();
        expect(screen.getByTestId('dragon1')).toBeInTheDocument()
        act(() => screen.getByTestId('dragon1').click())
        expect(screen.getByTestId('dragon1')).toHaveStyle('border: 1px solid #000000;')
        act(() => screen.getByTestId('dragon1').click())
        expect(screen.getByTestId('dragon1')).toHaveStyle('border: none;')
    })
})