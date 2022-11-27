import { Viewer, Worker  } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useSelector } from "react-redux"

export default function ViewCV(props) {
    const dataCV = useSelector((state) => state.CV)
    const newplugin = defaultLayoutPlugin()
    console.log(dataCV)
    return(
    <div className='pdf-container'>
        <Worker workerUrl="http://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <Viewer fileUrl={dataCV.data} plugins={[newplugin]} />
        </Worker>
    </div>
    );
}