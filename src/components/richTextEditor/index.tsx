import { FC } from 'react';
import { Input, Typography } from 'antd';

const { Text } = Typography;

interface IRichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const RichTextEditor: FC<IRichTextEditorProps> = ({
  value,
  onChange,
  className,
}) => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction
    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    // ... (remaining toolbar options)
    ['clean'], // remove formatting button
  ];

  return (
    <>
      <Input.TextArea
        value={value}
        placeholder="Edit here ..."
        onChange={(e) => onChange(e.target.value)}
        autoSize={{ minRows: 4, maxRows: 10 }}
        className={`mt-4 rounded-lg ${className}`}
      />
      {/* <Text type="secondary">Formatting options are not available in this TextArea.</Text> */}
    </>
  );
};
