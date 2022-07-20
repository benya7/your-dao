import { useRouter } from "next/router";
import { useDashBoardContext } from "../context/state"

export default function Search() {
  const { handleSearch } = useDashBoardContext()!;
  const router = useRouter();
  return (
      <div className="relative" >
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input 
        type="search" 
        id="default-search" 
        onFocus={() => router.push('/')}
        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search a DAO..."
        onChange={handleSearch}
        required 
        
        />
          
      </div>
  )
}