<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    * {
                        font-family: Arial;
                    }
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    th, td {
                        text-align: left;
                        padding: 8px;
                    }
                    tr:nth-child(even){background-color: #f2f2f2}
                    th {
                        background-color: #4CAF50;
                        color: white;
                    }
                    table {
                        border-collapse: collapse;
                        width: 80%;
                        border-radius: 5px solid #ccc;
                    }
                </style>
            </head>
            <body>
                <h2>My CD Collection</h2>
                <table border="1">
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>genre</th>
                        <th>Year</th>
                    </tr>
                    <xsl:for-each select="CD_CATLOGUE/CD">
                        <tr>
                            <td>
                                <xsl:value-of select="title" />
                            </td>
                            <td>
                                <xsl:value-of select="singer" />
                            </td>
                            <td>
                                <xsl:value-of select="genre" />
                            </td>
                            <td>
                                <xsl:value-of select="year" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
