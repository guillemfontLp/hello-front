import React, { useRef, useState } from "react";
import {
  HiDocumentDuplicate,
  HiDotsVertical,
  HiDocumentText,
  HiFolder,
} from "react-icons/hi";
import { PublicIcon } from "components";
import { formatBytes, formatUID } from "utils";
import dayjs from "dayjs";
import { Folder, File, Api } from "api";
import { useAppDispatch } from "state";
import useDropdown from "hooks/useDropdown";
import { closeDropdown, openDropdown } from "state/dashboard/actions";
import { useNavigate } from "react-router-dom";

interface FilesProps {
  files: File[];
  folders: Folder[];
}

const Files: React.FC<FilesProps> = ({ folders, files }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<string | null>(
    null
  );

  const onFolderClick = () => {
    void 0;
  };
  const onFolderDoubleClick = (folderUID: string) => {
    navigate(`/folder/${folderUID}`);
  };

  useDropdown(dropdownRef, openDropdownIndex !== null, () => {
    dispatch(closeDropdown());
    setOpenDropdownIndex(null);
  });

  const handleDropdownClick = (
    type: string,
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    //event.stopPropagation(); //stop event bubbling
    dropdownRef.current = event.currentTarget as unknown as HTMLDivElement;
    const uniqueIndex = `${type}-${index}`;
    if (openDropdownIndex === uniqueIndex) {
      setOpenDropdownIndex(null);
      dispatch(closeDropdown());
    } else {
      setOpenDropdownIndex(uniqueIndex);
      dispatch(openDropdown(uniqueIndex));
    }
  };

  // Function to handle file download

  const handleDownload = (file: File) => {
    // Make a request to download the file with responseType 'blob'
    Api.get(`/download/${file.uid}`, { responseType: "blob" })
      .then((res) => {
        console.log(res);
        // Create a blob from the response data
        const blob = new Blob([res.data], { type: file.mimeType });

        // Create a link element and set the blob as its href
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name; // Set the file name
        a.click(); // Trigger the download

        // Clean up
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error("Error downloading file:", err);
      });
  };

  return (
    <tbody>
      {/* folders */}
      {folders.map((v, i) => (
        <tr
          className="bg-white cursor-pointer border-b hover:bg-gray-100"
          key={i}
          onClick={onFolderClick}
          onDoubleClick={() => onFolderDoubleClick(v.uid)}
        >
          <th
            scope="row"
            className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap"
          >
            <div className="flex items-center gap-3 select-none">
              <HiFolder className="w-8 h-8" color="#737373" />
              {v.title}
            </div>
          </th>
          <td className="p-1">
            <div className="flex items-center gap-1 select-none">
              {formatUID(v.uid)}
              <HiDocumentDuplicate />
            </div>
          </td>
          <td className="p-1">-</td>
          <td className="p-1">
            <div className="flex items-center select-none">
              <PublicIcon /> Public
            </div>
          </td>
          <td className="p-1 select-none">{dayjs(v.UpdatedAt).fromNow()}</td>
          <td className="py-1 px-3 text-right relative">
            <button
              className="rounded-full hover:bg-gray-300 p-3"
              onClick={(e) => handleDropdownClick("folder", i, e)}
            >
              <HiDotsVertical />
            </button>
            {openDropdownIndex === `folder-${i}` && (
              <div
                id="dropdown"
                className="absolute right-0 z-10 mt-2 bg-white shadow-lg text-left"
              >
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Download
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Share
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Delete
                </a>
              </div>
            )}
          </td>
        </tr>
      ))}
      {/* files */}
      {files.map((v, i) => (
        <tr
          className="bg-white cursor-pointer border-b hover:bg-gray-100 "
          key={i}
        >
          <th
            scope="row"
            className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap"
          >
            <div className="flex items-center gap-3">
              <HiDocumentText className="w-8 h-8" color="#3b82f6" />
              {v.name}
            </div>
          </th>
          <td className="p-1">
            <div className="flex items-center gap-1">
              {formatUID(v.uid)}
              <HiDocumentDuplicate />
            </div>
          </td>
          <td className="p-1">{formatBytes(v.size)}</td>
          <td className="p-1">
            <div className="flex items-center">
              <PublicIcon /> Public
            </div>
          </td>
          <td className="p-1">{dayjs(v.UpdatedAt).fromNow()}</td>
          <td className="py-1 px-3 text-right">
            <button
              className="rounded-full hover:bg-gray-300 p-3"
              onClick={(e) => handleDropdownClick("file", i, e)}
            >
              <HiDotsVertical />
              {openDropdownIndex === `file-${i}` && (
                <div
                  id="dropdown"
                  className="absolute right-0 z-10 mt-2 bg-white shadow-lg text-left"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleDownload(v)}
                  >
                    Download
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Share
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    View
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Delete
                  </a>
                </div>
              )}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Files;