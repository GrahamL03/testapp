// app/global-error 

"use client"; //Error boundries must be client-side only

export default function GlobalError({
                                        error,
                                    }:{
    error: Error & {digest?: string};
}) {
    return (
        //global-error must incude html and body tags
        <html>
            <body>
                <h2>Global Error</h2>
            </body>
        </html>
    );}