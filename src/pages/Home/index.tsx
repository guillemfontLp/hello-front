import { EncryptedIcon, PublicIcon } from "components";
import {
  HiDocumentDuplicate,
  HiFolder,
  HiDotsVertical,
  HiDocumentText,
  HiPhotograph,
} from "react-icons/hi";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl">My Storage</h1>

      <div className="relative mt-3 overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                CID
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Last Modified
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-gray-100 rounded-md">
                    <HiFolder className="w-5 h-5" />
                  </div>
                  Assets
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  0E70...270A
                  <HiDocumentDuplicate />
                </div>
              </td>
              <td className="px-6 py-4">10.6 MB</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <EncryptedIcon /> Encrypted
                </div>
              </td>
              <td className="px-6 py-4">1 days ago</td>
              <td className="px-6 py-4">
                <HiDotsVertical />
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-gray-100 rounded-md">
                    <HiFolder className="w-5 h-5" />
                  </div>
                  images
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  0A33...251J
                  <HiDocumentDuplicate />
                </div>
              </td>
              <td className="px-6 py-4">1.3 GB</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <EncryptedIcon /> Encrypted
                </div>
              </td>
              <td className="px-6 py-4">2 days ago</td>
              <td className="px-6 py-4">
                <HiDotsVertical />
              </td>
            </tr>

            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-gray-100 rounded-md">
                    <HiFolder className="w-5 h-5" />
                  </div>
                  Docs
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  2E33...556J
                  <HiDocumentDuplicate />
                </div>
              </td>
              <td className="px-6 py-4">150.9 MB</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <EncryptedIcon /> Encrypted
                </div>
              </td>
              <td className="px-6 py-4">3 days ago</td>
              <td className="px-6 py-4">
                <HiDotsVertical />
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-gray-100 rounded-md">
                    <HiPhotograph className="w-5 h-5" />
                  </div>
                  3d credit card.jpg
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  0A4T...937N
                  <HiDocumentDuplicate />
                </div>
              </td>
              <td className="px-6 py-4">244.92 KB</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <PublicIcon /> Public
                </div>
              </td>
              <td className="px-6 py-4">8 days ago</td>
              <td className="px-6 py-4">
                <HiDotsVertical />
              </td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-gray-100 rounded-md">
                    <HiDocumentText className="w-5 h-5" />
                  </div>
                  branding details.doc
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  0E73...887V
                  <HiDocumentDuplicate />
                </div>
              </td>
              <td className="px-6 py-4">1.3 MB</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <EncryptedIcon /> Encrypted
                </div>
              </td>
              <td className="px-6 py-4">15 days ago</td>
              <td className="px-6 py-4">
                <HiDotsVertical />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
