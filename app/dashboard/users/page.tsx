import { z } from "zod";
import { DataTable } from "../../../components/ui/data-table";
import { UserSchema } from "@/schema/userSchema";
import { userData } from "@/data/userData";
import { columns } from "./_components/columns";

async function getTransaction() {
  const transaction = userData;
  return z.array(UserSchema).parse(transaction);
}

const UsersPage = async () => {
  const transaction = await getTransaction();
  return (
    <div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={transaction} columns={columns} />
      </div>
    </div>
  );
};

export default UsersPage;
