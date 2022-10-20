import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Driver from '@/pages/index'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          {
            gender: 'female',
            name: { title: 'Miss', first: 'Vlatka', last: 'Šarić' },
            location: {
              street: { number: 510, name: 'Vitalija Ginzburga' },
              city: 'Žabari',
              state: 'Jablanica',
              country: 'Serbia',
              postcode: 20752,
              coordinates: { latitude: '56.9414', longitude: '90.1540' },
              timezone: { offset: '-9:00', description: 'Alaska' },
            },
            email: 'vlatka.saric@example.com',
            login: {
              uuid: 'fa210ef1-1004-4e96-8482-cb83cf81b6be',
              username: 'blackrabbit722',
              password: 'kids',
              salt: 'ddr3KzGs',
              md5: 'f73c5ed936cd61deafe3a8e60941bcab',
              sha1: 'dd7efc6dfc5f42d47fb66131429e57696c3fdfa8',
              sha256:
                '2f8addbe104d40ae4c9166753475551895b42bdc137b61ac8bbd927b2871c932',
            },
            dob: { date: '1973-06-07T02:57:58.404Z', age: 49 },
            registered: { date: '2006-04-09T15:43:54.965Z', age: 16 },
            phone: '035-1747-851',
            cell: '065-2295-950',
            id: { name: 'SID', value: '805816887' },
            picture: {
              large: 'https://randomuser.me/api/portraits/women/73.jpg',
              medium: 'https://randomuser.me/api/portraits/med/women/73.jpg',
              thumbnail:
                'https://randomuser.me/api/portraits/thumb/women/73.jpg',
            },
            nat: 'RS',
          },
        ],
      }),
  }),
) as jest.Mock

describe('Driver Page', () => {
  afterEach(cleanup)

  it('should renders DriverPage correctly', async () => {
    render(<Driver />)
    const heading = await screen.getByRole('heading', {
      name: /DRIVER MANAGEMENT/i,
    })

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })
    expect(heading).toBeInTheDocument()

    await userEvent.type(screen.getByTestId('search'), 'Mis')
    expect(screen.getByTestId('search')).toHaveValue('Mis')
    expect(screen.getByTestId('prev-btn')).toHaveAttribute('disabled')
    expect(screen.getByTestId('next-btn')).toHaveAttribute('disabled')
  })
})
