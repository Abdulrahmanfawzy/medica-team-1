export default function sideOnWaitingRoom() {
    return (
        <div className="md:w-3/12 w-full">
            <div className="p-5 flex flex-col gap-3 rounded-2xl border border-gray-300">
                <div className="flex justify-between">
                    <svg
                        width="22"
                        height="15"
                        viewBox="0 0 22 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.7617 12.75C11.3139 12.7501 11.7617 13.1978 11.7617 13.75C11.7617 14.3022 11.3139 14.7499 10.7617 14.75H10.75C10.1977 14.75 9.75 14.3023 9.75 13.75C9.75 13.1977 10.1977 12.75 10.75 12.75H10.7617ZM6.46973 10.2197C8.76264 7.92696 12.7374 7.92688 15.0303 10.2197C15.323 10.5126 15.323 10.9874 15.0303 11.2803C14.7374 11.5731 14.2626 11.573 13.9697 11.2803C12.2627 9.57321 9.2374 9.57329 7.53027 11.2803C7.23742 11.5731 6.76263 11.573 6.46973 11.2803C6.17683 10.9874 6.17683 10.5126 6.46973 10.2197ZM3.76953 7.17383C8.039 3.61593 13.6876 3.59688 17.7471 7.18848C18.057 7.46298 18.0859 7.93694 17.8115 8.24707C17.5371 8.55726 17.0631 8.58598 16.7529 8.31152C13.2772 5.23647 8.46001 5.21741 4.72949 8.32617C4.41139 8.59103 3.93898 8.54831 3.67383 8.23047C3.40867 7.91228 3.45137 7.43901 3.76953 7.17383ZM10.75 0C14.3763 4.68062e-05 17.9636 1.41573 21.2334 4.17676C21.5497 4.44387 21.5901 4.91692 21.3232 5.2334C21.056 5.54987 20.5821 5.59047 20.2656 5.32324C17.2198 2.75129 13.9656 1.50005 10.75 1.5C7.53437 1.50001 4.27927 2.75118 1.2334 5.32324C0.916927 5.59025 0.443929 5.54979 0.176758 5.2334C-0.0902191 4.91694 -0.0507201 4.44393 0.265625 4.17676C3.53554 1.41551 7.12352 1.62125e-05 10.75 0Z"
                            fill="#333333"
                        />
                    </svg>
                    <p>Connection Status</p>
                </div>
                <div className="flex justify-between">
                    <p>Internet:</p>
                    <p>Strong</p>
                </div>
                <div className="flex justify-between">
                    <p>Video Quality:</p>
                    <p>HD</p>
                </div>
                <div className="flex justify-between">
                    <p>Audio Quality:</p>
                    <p>Clear</p>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-3 rounded-2xl border border-gray-300 mt-5">
                <div className="flex justify-between">
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.75 0C16.6871 0 21.5 4.81294 21.5 10.75C21.5 16.6871 16.6871 21.5 10.75 21.5C4.81294 21.5 0 16.6871 0 10.75C0 4.81294 4.81294 0 10.75 0ZM10.75 1.5C5.64137 1.5 1.5 5.64137 1.5 10.75C1.5 15.8586 5.64137 20 10.75 20C15.8586 20 20 15.8586 20 10.75C20 5.64137 15.8586 1.5 10.75 1.5ZM10.751 12.75C11.3033 12.75 11.751 13.1977 11.751 13.75C11.751 14.3023 11.3033 14.75 10.751 14.75H10.7422C10.1899 14.75 9.74219 14.3023 9.74219 13.75C9.74219 13.1977 10.1899 12.75 10.7422 12.75H10.751ZM10.75 6C11.1642 6 11.5 6.33579 11.5 6.75V10.75C11.5 11.1642 11.1642 11.5 10.75 11.5C10.3358 11.5 10 11.1642 10 10.75V6.75C10 6.33579 10.3358 6 10.75 6Z"
                            fill="#333333"
                        />
                    </svg>
                    <p>Consultation Tips</p>
                </div>
                <div className="flex flex-col gap-3 mt-3 ">
                    <p>Ensure you are in a quiet, well-lit room</p>
                    <p>Keep your medical records ready</p>
                    <p>Test your camera and microphone before joining</p>
                    <p>Have a list of questions prepared</p>
                    <p>Close other applications to ensure stable connection</p>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-3 rounded-2xl border border-gray-300 mt-5">
                <h2>Important Notice</h2>
                <div className="flex justify-between">
                    <p>Internet:</p>
                    <p>Strong</p>
                </div>
                <div className="flex justify-between">
                    <p>Video Quality:</p>
                    <p>HD</p>
                </div>
                <div className="flex justify-between">
                    <p>Audio Quality:</p>
                    <p>Clear</p>
                </div>
            </div>
        </div>
    );
}
