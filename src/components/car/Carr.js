import React, { useState } from 'react';

//CSS File
import './car.css';

const Car = () => {

    const [isCameraOpen, setIsCameraOpen] = useState(false);

    const handleCameraOpen = () => {
        setIsCameraOpen(prevState => !prevState);
    };

    return (

        <div className='car'>

            <div className='car-body'>

                <div className='car-spoiler-holder'>
                    <div className='car-spoiler' />
                </div>

                <div className='car-siren-holder'>
                    <div className='car-siren' />
                </div>

                <div className='car-back-mirror' />

                <div className='car-seats'>
                    <div className='car-seat' />
                    <div className='car-seat' />
                </div>

                <div className='car-front-mirror' />

                <div className='car-left-mirror-camera-holder'>
                    <div className='car-left-mirror-camera'>
                        <div className='car-left-mirror-camera-eye'></div>
                    </div>
                </div>

                <div className='car-left-mirror-holder'>
                    <div className='car-left-mirror'>
                        <div className='car-left-mirror-inside' />
                    </div>
                </div>

                <div className='car-right-mirror-holder'>
                    <div className='car-right-mirror'>
                        <div className='car-right-mirror-inside' />
                    </div>
                </div>

                <div className='car-right-mirror-camera-holder'>
                    <div className='car-right-mirror-camera'>
                        <div className='car-right-mirror-camera-eye'></div>
                    </div>
                </div>

                <div className='car-tires'>

                    <div className='car-tire'>
                        <div className='car-tire-rim' />
                    </div>

                    <div className='car-tire'>
                        <div className='car-tire-rim' />
                    </div>

                </div>

            </div>

            <div className='car-front-light'>

                <div className='car-front-light-left-bulb'>
                    <div className='car-front-light-left-bulb-power' />
                </div>

                <div
                    onClick={handleCameraOpen}
                    className={isCameraOpen ? 'car-front-light-middle-camera open' : 'car-front-light-middle-camera'}
                >

                    <div
                        className='car-front-light-middle-camera-eye'
                    />

                </div>

                <div className='car-front-left-power-light'>
                    <div className='car-front-left-power-light-indicator' />
                </div>

                <div
                    onClick={handleCameraOpen}
                    className={isCameraOpen ? 'car-front-light-middle-camera open' : 'car-front-light-middle-camera'}
                >

                    <div
                        className='car-front-light-middle-camera-eye'
                    />

                </div>

                <div className='car-front-right-power-light'>
                    <div className='car-front-right-power-light-indicator' />
                </div>

                <div className='car-front-light-right-bulb'>
                    <div className='car-front-light-right-bulb-power' />
                </div>

            </div>

            <div className='car-front-bumper-above-left-holes'>
                <div className='car-front-bumper-above-left-hole'></div>
                <div className='car-front-bumper-above-left-hole'></div>
            </div>

            <div className='car-front-bumper-left-hole'></div>

            <div className='car-front-bumper-right-hole'></div>

            <div className='car-front-bumper-above-right-holes'>
                <div className='car-front-bumper-above-right-hole'></div>
                <div className='car-front-bumper-above-right-hole'></div>
            </div>

            <div className='car-wiper' />

            <div className='car-front-roof-scoop'>
                <div className='car-front-roof-scoop-top' />
                <div className='car-front-roof-scoop-left' />
                <div className='car-front-roof-scoop-middle' />
                <div className='car-front-roof-scoop-right' />
                <div className='car-front-roof-scoop-bottom' />
            </div>

            <div className='car-front-stairs'>
                
                <div className='car-front-stair'>
                <div className='car-front-stair-lights'>
                    <div className='car-front-stair-light' />
                    <div className='car-front-stair-light' />
                </div>
                </div>
                
                <div className='car-front-stair'>
                    <div className='car-front-lines'>
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                    </div>
                </div>
                
                <div className='car-front-stair'>
                    <div className='car-front-lines'>
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                        <div className='car-front-line' />
                    </div>
                    <div className='car-front-stair-lights'>
                    <div className='car-front-stair-light' />
                    <div className='car-front-stair-light' />
                </div>
                </div>

            </div>

            <div className='car-number-plate'>
                <div className='car-number-plate-text'>
                    <span>F.D.</span> <span>T@21</span>
                </div>
            </div>

        </div>

    )

}

export default Car;