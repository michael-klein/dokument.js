import * as React from 'react';

export function Loading(): JSX.Element {
  return (
    <>
      <style type="text/css">
        {`
                .loading {
                    margin: 20px auto;
                    margin-top: 50%;
                    width: 40px;
                    height: 40px;
                    position: relative;
                    -webkit-transform: rotateZ(45deg);
                        transform: rotateZ(45deg);
                }

                .loading .cube {
                float: left;
                width: 50%;
                height: 50%;
                position: relative;
                -webkit-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                        transform: scale(1.1); 
                }
                .loading .cube:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #333;
                -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
                        animation: sk-foldCubeAngle 2.4s infinite linear both;
                -webkit-transform-origin: 100% 100%;
                    -ms-transform-origin: 100% 100%;
                        transform-origin: 100% 100%;
                }
                .loading .cube2 {
                -webkit-transform: scale(1.1) rotateZ(90deg);
                        transform: scale(1.1) rotateZ(90deg);
                }
                .loading .cube3 {
                -webkit-transform: scale(1.1) rotateZ(180deg);
                        transform: scale(1.1) rotateZ(180deg);
                }
                .loading .cube4 {
                -webkit-transform: scale(1.1) rotateZ(270deg);
                        transform: scale(1.1) rotateZ(270deg);
                }
                .loading .cube2:before {
                -webkit-animation-delay: 0.3s;
                        animation-delay: 0.3s;
                }
                .loading .cube3:before {
                -webkit-animation-delay: 0.6s;
                        animation-delay: 0.6s; 
                }
                .loading .cube4:before {
                -webkit-animation-delay: 0.9s;
                        animation-delay: 0.9s;
                }
                @-webkit-keyframes sk-foldCubeAngle {
                0%, 10% {
                    -webkit-transform: perspective(140px) rotateX(-180deg);
                            transform: perspective(140px) rotateX(-180deg);
                    opacity: 0; 
                } 25%, 75% {
                    -webkit-transform: perspective(140px) rotateX(0deg);
                            transform: perspective(140px) rotateX(0deg);
                    opacity: 1; 
                } 90%, 100% {
                    -webkit-transform: perspective(140px) rotateY(180deg);
                            transform: perspective(140px) rotateY(180deg);
                    opacity: 0; 
                } 
                }

                @keyframes sk-foldCubeAngle {
                0%, 10% {
                    -webkit-transform: perspective(140px) rotateX(-180deg);
                            transform: perspective(140px) rotateX(-180deg);
                    opacity: 0; 
                } 25%, 75% {
                    -webkit-transform: perspective(140px) rotateX(0deg);
                            transform: perspective(140px) rotateX(0deg);
                    opacity: 1; 
                } 90%, 100% {
                    -webkit-transform: perspective(140px) rotateY(180deg);
                            transform: perspective(140px) rotateY(180deg);
                    opacity: 0; 
                }
                }
        `}
      </style>
      <div className="loading">
        <div className="cube1 cube"></div>
        <div className="cube2 cube"></div>
        <div className="cube4 cube"></div>
        <div className="cube3 cube"></div>
      </div>
    </>
  );
}