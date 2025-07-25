import { Button } from "../../../components/ui/button";
import HeaderNav from "../../../components/layout/HeaderNav";
import {
  BellDot,
  ChevronDown,
  CircleHelp,
  Search,
  Settings,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Link } from "react-router-dom";
import {API_BASE_URL} from "../../../services/api"

const corporateAccounts = [
  {
    companyId: "C001",
    companyName: "Tech Innovators Inc.",
    contactPerson: "Alice Johnson",
    email: "alice.johnson@techinnovators.com",
    phone: "+1 987 654 3210",
    location: "San Francisco, USA",
    status: "Active",
  },
  {
    companyId: "C002",
    companyName: "Global Solutions Ltd.",
    contactPerson: "Bob Williams",
    email: "bob.williams@globalsolutions.com",
    phone: "+44 20 7946 0958",
    location: "London, UK",
    status: "Inactive",
  },
  {
    companyId: "C003",
    companyName: "Future Enterprises",
    contactPerson: "Charlie Brown",
    email: "charlie.brown@futureenterprises.com",
    phone: "+49 30 1234 5678",
    location: "Berlin, Germany",
    status: "Pending",
  },
  {
    companyId: "C004",
    companyName: "Prime Innovations",
    contactPerson: "Diana Evans",
    email: "diana.evans@primeinnovations.com",
    phone: "+33 1 23 45 67 89",
    location: "Paris, France",
    status: "Active",
  },
];

export default function Corporate() {
  return (
    <section className="flex flex-col gap-6">
     <HeaderNav title="Corporate" />
      <div className="bg-white rounded-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Contact Person</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {corporateAccounts.map((company) => (
              <TableRow key={company.companyId} className="text-sm">
                <TableCell>
                  <Link to={`${company.companyId}`} className="font-medium">
                    {company.companyName}
                  </Link>
                </TableCell>
                <TableCell>{company.contactPerson}</TableCell>
                <TableCell>{company.email}</TableCell>
                <TableCell>{company.phone}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>
                  <p
                    className={`w-fit p-1 text-xs rounded-md ${
                      company.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : company.status === "Inactive"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {company.status}
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
