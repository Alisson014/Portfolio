'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import { pdfjs, Document, Page} from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './ModalPDF.css';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

type ModalPDFType = {
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>,
    pdf: string | File,
}

export default function ModalPDF({ isActive, setIsActive, pdf } : ModalPDFType) {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState(1);
        function onDocumentLoadSuccess( document : PDFDocumentProxy ) { 
            setNumPages(document.numPages); 
        }

        return (
            <div onClick={() => setIsActive(false)} 
                className='fixed inset-0 flex flex-col items-center justify-center bg-bg/80 backdrop-blur-sm p-4 transition-all duration-500'
                style={{opacity: `${isActive ? '1.5' : '0'}`,zIndex: `${isActive ? '50' : '-10'}`, marginTop: `${isActive ? '0px' : '80px'}` }}
            >
                <button onClick={() => setIsActive(false)} 
                    className="absolute top-6 right-6 text-white hover:text-gray-300 transition-all text-4xl font-light"
                >
                    &times;
                </button>
                <div onClick={(e) => e.stopPropagation()} 
                    className='relative w-full max-w-4xl max-h-[85vh] overflow-auto scrollbar-hide flex justify-center'>
                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                        {[...Array(numPages)].map((x,i) => i+1).map(page=>{
                            return(<Page key={page.toString()} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} width={Math.min(window.innerWidth * 0.9, 800)} />)
                        })}
                        {/* <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}  /> */}
                    </Document>
                </div>
            </div>
    );
}