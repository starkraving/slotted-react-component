import styled from "styled-components";

const Dialog = styled.div`
    width: 500px;
    margin: 200px auto 0;

    header {
        background-color: #fff;
        border-radius: 10px 10px 0 0;
        padding: 4px 10px;
        position: relative;

        h2 {
            margin: 0;
            font-size: 21px;
        }

        button {
            position: absolute;
            top: 4px;
            right: 0;
            background: none;
            border: none;
            font-weight: bold;
            font-size: 21px;
        }
    }

    main {
        background-color: #fff;
        padding: 10px;
        border-top: 1px solid #333;

        &:last-child {
            border-radius: 0 0 10px 10px;
            padding-bottom: 15px;
        }

        p {
            margin: 0;
        }

        ol {
            padding: 0;
            margin: 10px 0 0;
            counter-reset: defs;
            list-style: none;

            li {
                position: relative;
                padding-left: 20px;
                counter-increment: defs;

                &::before {
                    content: counter(defs);
                    position: absolute;
                    left: 0px;
                }

                & ~ li {
                    margin-top: 15px;
                }
            }
        }
    }

    footer {
        background-color: #fff;
        padding: 10px;
        text-align: right;

        &:last-child {
            border-radius: 0 0 10px 10px;
            padding-bottom: 15px;
        }

        button {
            background-color: #eee;
            border-radius: 4px;
            border: 1px solid #333;
            padding: 4px;

            & ~ button {
                margin-left: 10px;
            }
        }
    }
`;

export default Dialog;