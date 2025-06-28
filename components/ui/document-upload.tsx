// DocumentUpload.tsx
import React, {useState, useRef, useEffect} from "react";
import {Card, Button, Badge, Image, Tooltip, OverlayTrigger} from "react-bootstrap";
import {Plus, X} from "react-bootstrap-icons";
import Text from "@/components/ui/text";
import Title from "@/components/ui/title";

interface UploadedFile {
  id: string;
  file: File;
  preview: string; // URL do objeto para imagens, ou "PDF" para PDFs
}

interface DocumentUploadProps {
  title?: string,
  subtitle?: string,
}

const DocumentUpload: React.FC = ({title, subtitle}: DocumentUploadProps) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Efeito para limpar as URLs de objeto quando o componente for desmontado
  useEffect(() => {
    return () => {
      files.forEach(file => {
        if (file.preview !== "PDF") {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const newFiles: UploadedFile[] = Array.from(selectedFiles).map(file => {
      const isImage = file.type.startsWith("image/");
      return {
        id: `${file.name}-${Date.now()}`,
        file: file,
        preview: isImage ? URL.createObjectURL(file) : "PDF",
      };
    });

    setFiles(prevFiles => [...prevFiles, ...newFiles]);

    // Limpa o valor do input para permitir o upload do mesmo arquivo novamente
    if (event.target) {
      event.target.value = "";
    }
  };

  const handleRemoveFile = (idToRemove: string) => {
    const fileToRemove = files.find(file => file.id === idToRemove);
    if (fileToRemove && fileToRemove.preview !== "PDF") {
      URL.revokeObjectURL(fileToRemove.preview);
    }
    setFiles(files.filter(file => file.id !== idToRemove));
  };

  const removeButton = (id: string) => (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-${id}`}><span className={"text-[16px]"}>Remover</span></Tooltip>}
    >
      <Button
        variant="danger"
        className="remove-button"
        onClick={(e) => {
          // Evita que o clique acione outros eventos
          e.stopPropagation();
          handleRemoveFile(id);
        }}
      >
        <X size={24}/>
      </Button>
    </OverlayTrigger>
  );


  return (
    <>
      <Card>
        <Card.Body className="upload-card-body">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <Card.Title as="p" className={"mb-2"}>
                <Title level={5} className={"text-balance"}>{title}</Title>
              </Card.Title>
              <Card.Subtitle className="mb-2">
                <Text as={"p"} color={"body-secondary"} className={"font-normal"}>{subtitle}</Text>
              </Card.Subtitle>
            </div>
            <Badge bg="primary" pill style={{fontSize: "1rem", padding: "0.5rem 0.8rem"}}>
              {files.length}
            </Badge>
          </div>

          <div className="upload-area">
            {files.map(uploadedFile => (
              <div key={uploadedFile.id} className="preview-card">
                {uploadedFile.preview === "PDF" ? (
                  <div className="pdf-preview">PDF</div>
                ) : (
                  <Image src={uploadedFile.preview} className="preview-image" alt="Preview"/>
                )}
                {removeButton(uploadedFile.id)}
              </div>
            ))}

            <div className="upload-button-box" onClick={handleUploadClick}>
              <Plus size={32}/>
              <span>Upload</span>
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{display: "none"}}
            multiple
            accept=".jpg,.jpeg,.png,.pdf"
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default DocumentUpload;