import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold">Hozircha eslatmalar yoʻq</h3>
      <p className="text-base-content/70">
        Fikrlaringizni tartibga solishga tayyormisiz? Boshlash uchun birinchi eslatmani yarating.
      </p>
      <Link to="/create" className="btn btn-primary">
        Birinchi eslatmani yarating!
      </Link>
    </div>
  );
};
export default NotesNotFound;
