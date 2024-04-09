import React, { useCallback, useState } from "react";

const fileData = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "documents",
      type: "folder",
      children: [
        {
          name: "work",
          type: "folder",
          children: [
            { name: "project1.doc", type: "file", size: "100KB" },
            { name: "project2.doc", type: "file", size: "150KB" },
            { name: "notes.txt", type: "file", size: "50KB" },
          ],
        },
        {
          name: "personal",
          type: "folder",
          children: [
            { name: "resume.docx", type: "file", size: "80KB" },
            { name: "photos", type: "folder", children: [] },
            { name: "diary.txt", type: "file", size: "30KB" },
          ],
        },
      ],
    },
    {
      name: "downloads",
      type: "folder",
      children: [
        { name: "installer.exe", type: "file", size: "500KB" },
        { name: "tutorial.pdf", type: "file", size: "1MB" },
      ],
    },
    {
      name: "music",
      type: "folder",
      children: [
        { name: "song1.mp3", type: "file", size: "3MB" },
        { name: "song2.mp3", type: "file", size: "4MB" },
        { name: "song3.mp3", type: "file", size: "5MB" },
      ],
    },
  ],
};

interface EntryType {
  name: string;
  type: string;
  children?: EntryType[];
}
const Entry = ({ entry, depth }: { entry: EntryType; depth: number }) => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="ml-5 my-1 w-40">
      <div
        className={`${
          entry.type === "folder" ? "bg-neutral-700 rounded-sm" : ""
        } p-1 cursor-pointer`}
        onClick={toggle}
      >
        {entry.name}
      </div>

      {open && (
        <div>
          {entry?.children?.map((entry, index) => {
            return <Entry key={index} entry={entry} depth={depth + 1} />;
          })}
        </div>
      )}
    </div>
  );
};

const FileManager = () => {
  return (
    <div>
      <div className="m-1.5 text-lg font-semibold">File Manager</div>

      {fileData?.children.map((entry, index) => {
        return <Entry key={index} entry={entry} depth={1} />;
      })}
    </div>
  );
};

export default FileManager;
