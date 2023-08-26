import React from 'react'
import useSound from 'use-sound';
import boopSfx from '../Sound/sound1.mp3';
import { FiPauseCircle, FiPlayCircle } from "react-icons/fi";

function Player() {
    const [play, { stop }] = useSound(boopSfx);
    return (
        <div>
            <div>Player</div>
            <a onClick={play}>
                <span role="img" aria-label="trumpet">
                    <FiPlayCircle />
                </span>
            </a>
        </div>
    )
}

export default Player