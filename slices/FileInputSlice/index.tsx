import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Props for `FileInputSlice`.
 */
export type FileInputSliceProps =
  SliceComponentProps<Content.FileInputSliceSlice>;

/**
 * Component for "FileInputSlice" Slices.
 */
const FileInputSlice: FC<FileInputSliceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-mini big-container"
    >
      <div className="max-w-sm mx-auto bg-gray-100 p-8 rounded-lg text-center">
        <div className="mb-6">
          <div className="w-12 h-12 mx-auto border-2 border-blue-500 rounded-full flex items-center justify-center">
            <Download className="w-6 h-6 text-blue-500" />
          </div>
        </div>

        <h3 className=" text-gray-900 mb-6 leading-tight">
          {slice.primary.heading}
        </h3>

        <Button className="">
          <PrismicNextLink field={slice.primary.content_file}></PrismicNextLink>
        </Button>
      </div>
    </section>
  );
};

export default FileInputSlice;
