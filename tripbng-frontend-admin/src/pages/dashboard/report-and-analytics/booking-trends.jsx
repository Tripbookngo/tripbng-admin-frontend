import { Button } from "../../../components/ui/button";
import HeaderNav from "../../../components/layout/HeaderNav";
const bookingTrends = [
  { month: "January", bookings: 30 },
  { month: "February", bookings: 20 },
  { month: "March", bookings: 50 },
  { month: "April", bookings: 40 },
  { month: "May", bookings: 60 },
  { month: "June", bookings: 70 },
  { month: "July", bookings: 90 },
  { month: "August", bookings: 80 },
  { month: "September", bookings: 100 },
];

export default function BookingTrends() {
  return (
    <section className="flex flex-col gap-6">
      <HeaderNav title="Booking-Trends" />
          <div className="flex items-end justify-end">
        <Button className="mb-2 w-1/6">Download Report</Button></div>
      <div className="bg-white rounded-xl p-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Month</th>
              <th className="text-left">Bookings</th>
            </tr>
          </thead>
          <tbody>
            {bookingTrends.map((trend) => (
              <tr key={trend.month}>
                <td className="py-2">{trend.month}</td>
                <td className="py-2">{trend.bookings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
