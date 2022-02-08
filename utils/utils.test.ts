import { compareDates } from "./";

const date1 = '2018-03-25T12:00:00';
const date2 = '2017-03-25T12:00:00Z';

describe('Comparing dates correclty', () => {
    it('Ordering by older', () => {
        expect(compareDates(date1, date2, 'older') > 0).toBe(true);
    })
    it('Ordering by newest', () => {
        expect(compareDates(date1, date2, 'newest') < 0).toBe(true);
    })

})
