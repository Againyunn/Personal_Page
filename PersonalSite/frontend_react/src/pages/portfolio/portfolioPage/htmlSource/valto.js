export default function valtoNotion() {
  const result = `
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>VALTO(Value Together)</title>
    <style>
      /* cspell:disable-file */
      /* webkit printing magic: print all background colors */
      html {
        -webkit-print-color-adjust: exact;
      }
      * {
        box-sizing: border-box;
        -webkit-print-color-adjust: exact;
      }

      html,
      body {
        margin: 0;
        padding: 0;
      }
      @media only screen {
        body {
          margin: 2em auto;
          max-width: 900px;
          color: rgb(55, 53, 47);
        }
      }

      body {
        line-height: 1.5;
        white-space: pre-wrap;
      }

      a,
      a.visited {
        color: inherit;
        text-decoration: underline;
      }

      .pdf-relative-link-path {
        font-size: 80%;
        color: #444;
      }

      h1,
      h2,
      h3 {
        letter-spacing: -0.01em;
        line-height: 1.2;
        font-weight: 600;
        margin-bottom: 0;
      }

      .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 0.75em;
      }

      h1 {
        font-size: 1.875rem;
        margin-top: 1.875rem;
      }

      h2 {
        font-size: 1.5rem;
        margin-top: 1.5rem;
      }

      h3 {
        font-size: 1.25rem;
        margin-top: 1.25rem;
      }

      .source {
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 1.5em;
        word-break: break-all;
      }

      .callout {
        border-radius: 3px;
        padding: 1rem;
      }

      figure {
        margin: 1.25em 0;
        page-break-inside: avoid;
      }

      figcaption {
        opacity: 0.5;
        font-size: 85%;
        margin-top: 0.5em;
      }

      mark {
        background-color: transparent;
      }

      .indented {
        padding-left: 1.5em;
      }

      hr {
        background: transparent;
        display: block;
        width: 100%;
        height: 1px;
        visibility: visible;
        border: none;
        border-bottom: 1px solid rgba(55, 53, 47, 0.09);
      }

      img {
        max-width: 100%;
      }

      @media only print {
        img {
          max-height: 100vh;
          object-fit: contain;
        }
      }

      @page {
        margin: 1in;
      }

      .collection-content {
        font-size: 0.875rem;
      }

      .column-list {
        display: flex;
        justify-content: space-between;
      }

      .column {
        padding: 0 1em;
      }

      .column:first-child {
        padding-left: 0;
      }

      .column:last-child {
        padding-right: 0;
      }

      .table_of_contents-item {
        display: block;
        font-size: 0.875rem;
        line-height: 1.3;
        padding: 0.125rem;
      }

      .table_of_contents-indent-1 {
        margin-left: 1.5rem;
      }

      .table_of_contents-indent-2 {
        margin-left: 3rem;
      }

      .table_of_contents-indent-3 {
        margin-left: 4.5rem;
      }

      .table_of_contents-link {
        text-decoration: none;
        opacity: 0.7;
        border-bottom: 1px solid rgba(55, 53, 47, 0.18);
      }

      table,
      th,
      td {
        border: 1px solid rgba(55, 53, 47, 0.09);
        border-collapse: collapse;
      }

      table {
        border-left: none;
        border-right: none;
      }

      th,
      td {
        font-weight: normal;
        padding: 0.25em 0.5em;
        line-height: 1.5;
        min-height: 1.5em;
        text-align: left;
      }

      th {
        color: rgba(55, 53, 47, 0.6);
      }

      ol,
      ul {
        margin: 0;
        margin-block-start: 0.6em;
        margin-block-end: 0.6em;
      }

      li > ol:first-child,
      li > ul:first-child {
        margin-block-start: 0.6em;
      }

      ul > li {
        list-style: disc;
      }

      ul.to-do-list {
        text-indent: -1.7em;
      }

      ul.to-do-list > li {
        list-style: none;
      }

      .to-do-children-checked {
        text-decoration: line-through;
        opacity: 0.375;
      }

      ul.toggle > li {
        list-style: none;
      }

      ul {
        padding-inline-start: 1.7em;
      }

      ul > li {
        padding-left: 0.1em;
      }

      ol {
        padding-inline-start: 1.6em;
      }

      ol > li {
        padding-left: 0.2em;
      }

      .mono ol {
        padding-inline-start: 2em;
      }

      .mono ol > li {
        text-indent: -0.4em;
      }

      .toggle {
        padding-inline-start: 0em;
        list-style-type: none;
      }

      /* Indent toggle children */
      .toggle > li > details {
        padding-left: 1.7em;
      }

      .toggle > li > details > summary {
        margin-left: -1.1em;
      }

      .selected-value {
        display: inline-block;
        padding: 0 0.5em;
        background: rgba(206, 205, 202, 0.5);
        border-radius: 3px;
        margin-right: 0.5em;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        white-space: nowrap;
      }

      .collection-title {
        display: inline-block;
        margin-right: 1em;
      }

      .simple-table {
        margin-top: 1em;
        font-size: 0.875rem;
        empty-cells: show;
      }
      .simple-table td {
        height: 29px;
        min-width: 120px;
      }

      .simple-table th {
        height: 29px;
        min-width: 120px;
      }

      .simple-table-header-color {
        background: rgb(247, 246, 243);
        color: black;
      }
      .simple-table-header {
        font-weight: 500;
      }

      time {
        opacity: 0.5;
      }

      .icon {
        display: inline-block;
        max-width: 1.2em;
        max-height: 1.2em;
        text-decoration: none;
        vertical-align: text-bottom;
        margin-right: 0.5em;
      }

      img.icon {
        border-radius: 3px;
      }

      .user-icon {
        width: 1.5em;
        height: 1.5em;
        border-radius: 100%;
        margin-right: 0.5rem;
      }

      .user-icon-inner {
        font-size: 0.8em;
      }

      .text-icon {
        border: 1px solid #000;
        text-align: center;
      }

      .page-cover-image {
        display: block;
        object-fit: cover;
        width: 100%;
        max-height: 30vh;
      }

      .page-header-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .page-header-icon-with-cover {
        margin-top: -0.72em;
        margin-left: 0.07em;
      }

      .page-header-icon img {
        border-radius: 3px;
      }

      .link-to-page {
        margin: 1em 0;
        padding: 0;
        border: none;
        font-weight: 500;
      }

      p > .user {
        opacity: 0.5;
      }

      td > .user,
      td > time {
        white-space: nowrap;
      }

      input[type="checkbox"] {
        transform: scale(1.5);
        margin-right: 0.6em;
        vertical-align: middle;
      }

      p {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
      }

      .image {
        border: none;
        margin: 1.5em 0;
        padding: 0;
        border-radius: 0;
        text-align: center;
      }

      .code,
      code {
        background: rgba(135, 131, 120, 0.15);
        border-radius: 3px;
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-size: 85%;
        tab-size: 2;
      }

      code {
        color: #eb5757;
      }

      .code {
        padding: 1.5em 1em;
      }

      .code-wrap {
        white-space: pre-wrap;
        word-break: break-all;
      }

      .code > code {
        background: none;
        padding: 0;
        font-size: 100%;
        color: inherit;
      }

      blockquote {
        font-size: 1.25em;
        margin: 1em 0;
        padding-left: 1em;
        border-left: 3px solid rgb(55, 53, 47);
      }

      .bookmark {
        text-decoration: none;
        max-height: 8em;
        padding: 0;
        display: flex;
        width: 100%;
        align-items: stretch;
      }

      .bookmark-title {
        font-size: 0.85em;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 1.75em;
        white-space: nowrap;
      }

      .bookmark-text {
        display: flex;
        flex-direction: column;
      }

      .bookmark-info {
        flex: 4 1 180px;
        padding: 12px 14px 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .bookmark-image {
        width: 33%;
        flex: 1 1 180px;
        display: block;
        position: relative;
        object-fit: cover;
        border-radius: 1px;
      }

      .bookmark-description {
        color: rgba(55, 53, 47, 0.6);
        font-size: 0.75em;
        overflow: hidden;
        max-height: 4.5em;
        word-break: break-word;
      }

      .bookmark-href {
        font-size: 0.75em;
        margin-top: 0.25em;
      }

      .sans {
        font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif,
          "Segoe UI Emoji", "Segoe UI Symbol";
      }
      .code {
        font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono",
          "Liberation Mono", Courier, monospace;
      }
      .serif {
        font-family: Lyon-Text, Georgia, ui-serif, serif;
      }
      .mono {
        font-family: iawriter-mono, Nitti, Menlo, Courier, monospace;
      }
      .pdf .sans {
        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif,
          "Segoe UI Emoji", "Segoe UI Symbol", "Twemoji", "Noto Color Emoji",
          "Noto Sans CJK JP";
      }
      .pdf:lang(zh-CN) .sans {
        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif,
          "Segoe UI Emoji", "Segoe UI Symbol", "Twemoji", "Noto Color Emoji",
          "Noto Sans CJK SC";
      }
      .pdf:lang(zh-TW) .sans {
        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif,
          "Segoe UI Emoji", "Segoe UI Symbol", "Twemoji", "Noto Color Emoji",
          "Noto Sans CJK TC";
      }
      .pdf:lang(ko-KR) .sans {
        font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif,
          "Segoe UI Emoji", "Segoe UI Symbol", "Twemoji", "Noto Color Emoji",
          "Noto Sans CJK KR";
      }
      .pdf .code {
        font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas,
          "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji",
          "Noto Color Emoji", "Noto Sans Mono CJK JP";
      }
      .pdf:lang(zh-CN) .code {
        font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas,
          "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji",
          "Noto Color Emoji", "Noto Sans Mono CJK SC";
      }
      .pdf:lang(zh-TW) .code {
        font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas,
          "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji",
          "Noto Color Emoji", "Noto Sans Mono CJK TC";
      }
      .pdf:lang(ko-KR) .code {
        font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas,
          "PT Mono", "Liberation Mono", Courier, monospace, "Twemoji",
          "Noto Color Emoji", "Noto Sans Mono CJK KR";
      }
      .pdf .serif {
        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, "Twemoji",
          "Noto Color Emoji", "Noto Serif CJK JP";
      }
      .pdf:lang(zh-CN) .serif {
        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, "Twemoji",
          "Noto Color Emoji", "Noto Serif CJK SC";
      }
      .pdf:lang(zh-TW) .serif {
        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, "Twemoji",
          "Noto Color Emoji", "Noto Serif CJK TC";
      }
      .pdf:lang(ko-KR) .serif {
        font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, "Twemoji",
          "Noto Color Emoji", "Noto Serif CJK KR";
      }
      .pdf .mono {
        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace,
          "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK JP";
      }
      .pdf:lang(zh-CN) .mono {
        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace,
          "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK SC";
      }
      .pdf:lang(zh-TW) .mono {
        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace,
          "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK TC";
      }
      .pdf:lang(ko-KR) .mono {
        font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace,
          "Twemoji", "Noto Color Emoji", "Noto Sans Mono CJK KR";
      }
      .highlight-default {
        color: rgba(55, 53, 47, 1);
      }
      .highlight-gray {
        color: rgba(120, 119, 116, 1);
        fill: rgba(120, 119, 116, 1);
      }
      .highlight-brown {
        color: rgba(159, 107, 83, 1);
        fill: rgba(159, 107, 83, 1);
      }
      .highlight-orange {
        color: rgba(217, 115, 13, 1);
        fill: rgba(217, 115, 13, 1);
      }
      .highlight-yellow {
        color: rgba(203, 145, 47, 1);
        fill: rgba(203, 145, 47, 1);
      }
      .highlight-teal {
        color: rgba(68, 131, 97, 1);
        fill: rgba(68, 131, 97, 1);
      }
      .highlight-blue {
        color: rgba(51, 126, 169, 1);
        fill: rgba(51, 126, 169, 1);
      }
      .highlight-purple {
        color: rgba(144, 101, 176, 1);
        fill: rgba(144, 101, 176, 1);
      }
      .highlight-pink {
        color: rgba(193, 76, 138, 1);
        fill: rgba(193, 76, 138, 1);
      }
      .highlight-red {
        color: rgba(212, 76, 71, 1);
        fill: rgba(212, 76, 71, 1);
      }
      .highlight-gray_background {
        background: rgba(241, 241, 239, 1);
      }
      .highlight-brown_background {
        background: rgba(244, 238, 238, 1);
      }
      .highlight-orange_background {
        background: rgba(251, 236, 221, 1);
      }
      .highlight-yellow_background {
        background: rgba(251, 243, 219, 1);
      }
      .highlight-teal_background {
        background: rgba(237, 243, 236, 1);
      }
      .highlight-blue_background {
        background: rgba(231, 243, 248, 1);
      }
      .highlight-purple_background {
        background: rgba(244, 240, 247, 0.8);
      }
      .highlight-pink_background {
        background: rgba(249, 238, 243, 0.8);
      }
      .highlight-red_background {
        background: rgba(253, 235, 236, 1);
      }
      .block-color-default {
        color: inherit;
        fill: inherit;
      }
      .block-color-gray {
        color: rgba(120, 119, 116, 1);
        fill: rgba(120, 119, 116, 1);
      }
      .block-color-brown {
        color: rgba(159, 107, 83, 1);
        fill: rgba(159, 107, 83, 1);
      }
      .block-color-orange {
        color: rgba(217, 115, 13, 1);
        fill: rgba(217, 115, 13, 1);
      }
      .block-color-yellow {
        color: rgba(203, 145, 47, 1);
        fill: rgba(203, 145, 47, 1);
      }
      .block-color-teal {
        color: rgba(68, 131, 97, 1);
        fill: rgba(68, 131, 97, 1);
      }
      .block-color-blue {
        color: rgba(51, 126, 169, 1);
        fill: rgba(51, 126, 169, 1);
      }
      .block-color-purple {
        color: rgba(144, 101, 176, 1);
        fill: rgba(144, 101, 176, 1);
      }
      .block-color-pink {
        color: rgba(193, 76, 138, 1);
        fill: rgba(193, 76, 138, 1);
      }
      .block-color-red {
        color: rgba(212, 76, 71, 1);
        fill: rgba(212, 76, 71, 1);
      }
      .block-color-gray_background {
        background: rgba(241, 241, 239, 1);
      }
      .block-color-brown_background {
        background: rgba(244, 238, 238, 1);
      }
      .block-color-orange_background {
        background: rgba(251, 236, 221, 1);
      }
      .block-color-yellow_background {
        background: rgba(251, 243, 219, 1);
      }
      .block-color-teal_background {
        background: rgba(237, 243, 236, 1);
      }
      .block-color-blue_background {
        background: rgba(231, 243, 248, 1);
      }
      .block-color-purple_background {
        background: rgba(244, 240, 247, 0.8);
      }
      .block-color-pink_background {
        background: rgba(249, 238, 243, 0.8);
      }
      .block-color-red_background {
        background: rgba(253, 235, 236, 1);
      }
      .select-value-color-pink {
        background-color: rgba(245, 224, 233, 1);
      }
      .select-value-color-purple {
        background-color: rgba(232, 222, 238, 1);
      }
      .select-value-color-green {
        background-color: rgba(219, 237, 219, 1);
      }
      .select-value-color-gray {
        background-color: rgba(227, 226, 224, 1);
      }
      .select-value-color-opaquegray {
        background-color: rgba(255, 255, 255, 0.0375);
      }
      .select-value-color-orange {
        background-color: rgba(250, 222, 201, 1);
      }
      .select-value-color-brown {
        background-color: rgba(238, 224, 218, 1);
      }
      .select-value-color-red {
        background-color: rgba(255, 226, 221, 1);
      }
      .select-value-color-yellow {
        background-color: rgba(253, 236, 200, 1);
      }
      .select-value-color-blue {
        background-color: rgba(211, 229, 239, 1);
      }

      .checkbox {
        display: inline-flex;
        vertical-align: text-bottom;
        width: 16;
        height: 16;
        background-size: 16px;
        margin-left: 2px;
        margin-right: 5px;
      }

      .checkbox-on {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
      }

      .checkbox-off {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
      }
    </style>
  </head>
  <body>
    <article id="caf73596-d159-478b-b272-eb6b3f082fae" class="page sans">
      <header>
        <img
          class="page-cover-image"
          src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B31.png"
          style="object-position: center 20.120000000000005%"
        />
        <div class="page-header-icon page-header-icon-with-cover">
          <img
            class="icon"
            src="https://www.notion.so/icons/donkey_yellow.svg"
          />
        </div>
        <h1 class="page-title">VALTO(Value Together)</h1>
        <table class="properties">
          <tbody>
            <tr class="property-row property-row-multi_select">
              <th>
                <span class="icon property-icon"
                  ><div
                    style="
                      width: 14px;
                      height: 14px;
                      transform: scale(1.2);
                      mask: url(/icons/briefcase_gray.svg?mode=light) no-repeat
                        center;
                      -webkit-mask: url(/icons/briefcase_gray.svg?mode=light)
                        no-repeat center;
                      background-color: rgba(55, 53, 47, 0.45);
                      fill: rgba(55, 53, 47, 0.45);
                    "
                  ></div></span
                >소속
              </th>
              <td>
                <span class="selected-value select-value-color-blue"
                  >한국외국어대학교</span
                >
              </td>
            </tr>
            <tr class="property-row property-row-date">
              <th>
                <span class="icon property-icon"
                  ><svg
                    viewBox="0 0 16 16"
                    style="
                      width: 14px;
                      height: 14px;
                      display: block;
                      fill: rgba(55, 53, 47, 0.45);
                      flex-shrink: 0;
                      -webkit-backface-visibility: hidden;
                    "
                    class="typesDate"
                  >
                    <path
                      d="M3.29688 14.4561H12.7031C14.1797 14.4561 14.9453 13.6904 14.9453 12.2344V3.91504C14.9453 2.45215 14.1797 1.69336 12.7031 1.69336H3.29688C1.82031 1.69336 1.05469 2.45215 1.05469 3.91504V12.2344C1.05469 13.6973 1.82031 14.4561 3.29688 14.4561ZM3.27637 13.1162C2.70898 13.1162 2.39453 12.8154 2.39453 12.2207V5.9043C2.39453 5.30273 2.70898 5.00879 3.27637 5.00879H12.71C13.2842 5.00879 13.6055 5.30273 13.6055 5.9043V12.2207C13.6055 12.8154 13.2842 13.1162 12.71 13.1162H3.27637ZM6.68066 7.38086H7.08398C7.33008 7.38086 7.41211 7.30566 7.41211 7.05957V6.66309C7.41211 6.41699 7.33008 6.3418 7.08398 6.3418H6.68066C6.44141 6.3418 6.35938 6.41699 6.35938 6.66309V7.05957C6.35938 7.30566 6.44141 7.38086 6.68066 7.38086ZM8.92285 7.38086H9.31934C9.56543 7.38086 9.64746 7.30566 9.64746 7.05957V6.66309C9.64746 6.41699 9.56543 6.3418 9.31934 6.3418H8.92285C8.67676 6.3418 8.59473 6.41699 8.59473 6.66309V7.05957C8.59473 7.30566 8.67676 7.38086 8.92285 7.38086ZM11.1582 7.38086H11.5547C11.8008 7.38086 11.8828 7.30566 11.8828 7.05957V6.66309C11.8828 6.41699 11.8008 6.3418 11.5547 6.3418H11.1582C10.9121 6.3418 10.8301 6.41699 10.8301 6.66309V7.05957C10.8301 7.30566 10.9121 7.38086 11.1582 7.38086ZM4.44531 9.58203H4.84863C5.09473 9.58203 5.17676 9.50684 5.17676 9.26074V8.86426C5.17676 8.61816 5.09473 8.54297 4.84863 8.54297H4.44531C4.20605 8.54297 4.12402 8.61816 4.12402 8.86426V9.26074C4.12402 9.50684 4.20605 9.58203 4.44531 9.58203ZM6.68066 9.58203H7.08398C7.33008 9.58203 7.41211 9.50684 7.41211 9.26074V8.86426C7.41211 8.61816 7.33008 8.54297 7.08398 8.54297H6.68066C6.44141 8.54297 6.35938 8.61816 6.35938 8.86426V9.26074C6.35938 9.50684 6.44141 9.58203 6.68066 9.58203ZM8.92285 9.58203H9.31934C9.56543 9.58203 9.64746 9.50684 9.64746 9.26074V8.86426C9.64746 8.61816 9.56543 8.54297 9.31934 8.54297H8.92285C8.67676 8.54297 8.59473 8.61816 8.59473 8.86426V9.26074C8.59473 9.50684 8.67676 9.58203 8.92285 9.58203ZM11.1582 9.58203H11.5547C11.8008 9.58203 11.8828 9.50684 11.8828 9.26074V8.86426C11.8828 8.61816 11.8008 8.54297 11.5547 8.54297H11.1582C10.9121 8.54297 10.8301 8.61816 10.8301 8.86426V9.26074C10.8301 9.50684 10.9121 9.58203 11.1582 9.58203ZM4.44531 11.7832H4.84863C5.09473 11.7832 5.17676 11.708 5.17676 11.4619V11.0654C5.17676 10.8193 5.09473 10.7441 4.84863 10.7441H4.44531C4.20605 10.7441 4.12402 10.8193 4.12402 11.0654V11.4619C4.12402 11.708 4.20605 11.7832 4.44531 11.7832ZM6.68066 11.7832H7.08398C7.33008 11.7832 7.41211 11.708 7.41211 11.4619V11.0654C7.41211 10.8193 7.33008 10.7441 7.08398 10.7441H6.68066C6.44141 10.7441 6.35938 10.8193 6.35938 11.0654V11.4619C6.35938 11.708 6.44141 11.7832 6.68066 11.7832ZM8.92285 11.7832H9.31934C9.56543 11.7832 9.64746 11.708 9.64746 11.4619V11.0654C9.64746 10.8193 9.56543 10.7441 9.31934 10.7441H8.92285C8.67676 10.7441 8.59473 10.8193 8.59473 11.0654V11.4619C8.59473 11.708 8.67676 11.7832 8.92285 11.7832Z"
                    ></path></svg></span
                >개발기간
              </th>
              <td><time>@2021/09/01 → 2021/12/31</time></td>
            </tr>
            <tr class="property-row property-row-multi_select">
              <th>
                <span class="icon property-icon"
                  ><div
                    style="
                      width: 14px;
                      height: 14px;
                      transform: scale(1.2);
                      mask: url(/icons/wrench_gray.svg?mode=light) no-repeat
                        center;
                      -webkit-mask: url(/icons/wrench_gray.svg?mode=light)
                        no-repeat center;
                      background-color: rgba(55, 53, 47, 0.45);
                      fill: rgba(55, 53, 47, 0.45);
                    "
                  ></div></span
                >기술스택
              </th>
              <td>
                <span class="selected-value select-value-color-orange">css</span
                ><span class="selected-value select-value-color-pink"
                  >django</span
                ><span class="selected-value select-value-color-gray">html</span
                ><span class="selected-value select-value-color-yellow"
                  >javascript</span
                ><span class="selected-value select-value-color-purple"
                  >vultr</span
                >
              </td>
            </tr>
            <tr class="property-row property-row-multi_select">
              <th>
                <span class="icon property-icon"
                  ><div
                    style="
                      width: 14px;
                      height: 14px;
                      transform: scale(1.2);
                      mask: url(/icons/card_gray.svg?mode=light) no-repeat
                        center;
                      -webkit-mask: url(/icons/card_gray.svg?mode=light)
                        no-repeat center;
                      background-color: rgba(55, 53, 47, 0.45);
                      fill: rgba(55, 53, 47, 0.45);
                    "
                  ></div></span
                >담당 역할
              </th>
              <td>
                <span class="selected-value select-value-color-gray"
                  >Back end 개발</span
                ><span class="selected-value select-value-color-green"
                  >기획</span
                >
              </td>
            </tr>
            <tr class="property-row property-row-text">
              <th>
                <span class="icon property-icon"
                  ><svg
                    viewBox="0 0 16 16"
                    style="
                      width: 14px;
                      height: 14px;
                      display: block;
                      fill: rgba(55, 53, 47, 0.45);
                      flex-shrink: 0;
                      -webkit-backface-visibility: hidden;
                    "
                    class="typesText"
                  >
                    <path
                      d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"
                    ></path></svg></span
                >인원
              </th>
              <td>프론트엔드 개발1, 백엔드 개발1, 영업1, 마케팅2</td>
            </tr>
            <tr class="property-row property-row-text">
              <th>
                <span class="icon property-icon"
                  ><svg
                    viewBox="0 0 16 16"
                    style="
                      width: 14px;
                      height: 14px;
                      display: block;
                      fill: rgba(55, 53, 47, 0.45);
                      flex-shrink: 0;
                      -webkit-backface-visibility: hidden;
                    "
                    class="typesText"
                  >
                    <path
                      d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z"
                    ></path></svg></span
                >한 줄 소개
              </th>
              <td>가치에 같이를 더하다, 유기동물 후원 캠페인 프로젝트</td>
            </tr>
            <tr class="property-row property-row-url">
              <th>
                <span class="icon property-icon"
                  ><svg
                    viewBox="0 0 16 16"
                    style="
                      width: 14px;
                      height: 14px;
                      display: block;
                      fill: rgba(55, 53, 47, 0.45);
                      flex-shrink: 0;
                      -webkit-backface-visibility: hidden;
                    "
                    class="typesUrl"
                  >
                    <path
                      d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"
                    ></path></svg></span
                >Github
              </th>
              <td>
                <a href="https://github.com/Againyunn/valto" class="url-value"
                  >https://github.com/Againyunn/valto</a
                >
              </td>
            </tr>
            <tr class="property-row property-row-url">
              <th>
                <span class="icon property-icon"
                  ><svg
                    viewBox="0 0 16 16"
                    style="
                      width: 14px;
                      height: 14px;
                      display: block;
                      fill: rgba(55, 53, 47, 0.45);
                      flex-shrink: 0;
                      -webkit-backface-visibility: hidden;
                    "
                    class="typesUrl"
                  >
                    <path
                      d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"
                    ></path></svg></span
                >서비스URL
              </th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </header>
      <div class="page-body">
        <h3 id="b2fe07ba-2c0d-431c-bcc3-5a52c8d3ffcd" class="">
          📃서비스 개요:
        </h3>
        <p id="8f6aaeb2-240e-46c0-9898-8adfeab56043" class="">
          가치에 같이를 더하다, 유기동물 후원 캠페인 프로젝트
        </p>
        <p id="3d4a01a8-73b6-4efa-9b6a-2058c0484ce2" class="">
          <strong>인원: </strong>프론트엔드 개발1, 백엔드 개발1, 영업1, 마케팅2
        </p>
        <p id="4221aea5-a694-4778-ab9f-64057e4e5424" class="">
          <strong>개발 기간:</strong> 22.09.01 ~ 21.12.31
        </p>
        <p id="6a8db8a4-1dfa-4ac9-90f7-ff8de9faa1e7" class=""></p>
        <p id="3da255b4-2c08-411d-a790-e70d504de097" class="">
          <strong>사용 기술 및 라이브러리:</strong>
        </p>
        <ul id="0d1290c9-6870-4260-8827-82648f064d1b" class="bulleted-list">
          <li style="list-style-type: disc">vanilla javascript, html, css</li>
        </ul>
        <ul id="c6df220e-52c2-4548-bbb3-334e26b105ec" class="bulleted-list">
          <li style="list-style-type: disc">django framework</li>
        </ul>
        <ul id="d11ad588-1ced-4cd2-8ad9-8c7b9c503582" class="bulleted-list">
          <li style="list-style-type: disc">vultr cloud server</li>
        </ul>
        <p id="8d6899d3-d8c1-45d9-9cce-26e1bbcf34a3" class=""></p>
        <hr id="3cf3cb78-c193-4863-ba4e-cf8509c04dc2" />
        <h3 id="a7f86157-ddf7-42d5-b06b-677da844a206" class="">
          📺 서비스 소개:
        </h3>
        <figure id="e670e5f6-0188-4af8-aa70-8ad933221707" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B35.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B35.png"
          /></a>
        </figure>
        <figure id="551d4255-47ab-424a-b81c-3f136a8371cb" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B37.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B37.png"
          /></a>
        </figure>
        <figure id="96bf6ff3-eb81-45d1-86f7-a3ba82550bda" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B39.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B39.png"
          /></a>
        </figure>
        <figure id="a5fe4085-ad56-42d6-be2d-503a2cd808b2" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B310.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B310.png"
          /></a>
        </figure>
        <figure id="687f3892-134b-4ec1-bb51-59b2203511f6" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B313.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B313.png"
          /></a>
        </figure>
        <figure id="639d4257-a38e-454c-9f08-7a980ad4b45e" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B314.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B314.png"
          /></a>
        </figure>
        <figure id="2010dbe6-4cf7-470b-8463-870a50861378" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B315.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B315.png"
          /></a>
        </figure>
        <figure id="f47194ef-2702-4269-a505-9abecea95f73" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B316.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B316.png"
          /></a>
        </figure>
        <figure id="3f642273-a465-4a95-8e6e-294efb41a6e9" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B317.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B317.png"
          /></a>
        </figure>
        <figure id="683c4efa-8c94-4698-8517-b5a5c0181ad0" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B319.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B319.png"
          /></a>
        </figure>
        <figure id="baa6f183-3b97-48ed-817a-b2d11198f6b5" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B320.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B320.png"
          /></a>
        </figure>
        <figure id="d55d33e5-63df-496c-b7e4-404bae433458" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B321.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B321.png"
          /></a>
        </figure>
        <figure id="7eac78db-b62a-4813-a305-d278264a80ec" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B322.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B322.png"
          /></a>
        </figure>
        <figure id="a60e4aa2-6cb3-4f70-8ca8-2aba23ee7ec5" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B323.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B323.png"
          /></a>
        </figure>
        <figure id="c00ad687-b34a-4cf1-acc7-c25d252f15b3" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B324.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B324.png"
          /></a>
        </figure>
        <figure id="6fdce467-8e5b-48fe-8548-b7c65ae86a88" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B325.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B325.png"
          /></a>
        </figure>
        <figure id="db1125f8-b0b9-4809-b8cc-dc66dcbd1ff8" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B326.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B326.png"
          /></a>
        </figure>
        <figure id="a4d0ca4c-a5cd-4b65-ac8b-4de5c1e69ca5" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B327.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B327.png"
          /></a>
        </figure>
        <figure id="3c6d1d36-743a-4758-89ab-73839aaeafb5" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B328.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B328.png"
          /></a>
        </figure>
        <figure id="fa282262-183f-4325-94b9-fd9d428b92ac" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B329.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B329.png"
          /></a>
        </figure>
        <figure id="e5d07622-fde9-4a4a-b06a-d2950ce686fa" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B330.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B330.png"
          /></a>
        </figure>
        <figure id="1365f291-3bc1-4314-9c13-c38bdb533ca9" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B331.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B331.png"
          /></a>
        </figure>
        <figure id="80c10677-5381-40ef-aa23-b8606fef6297" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B332.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B332.png"
          /></a>
        </figure>
        <figure id="d320a5c3-127a-45f6-944b-782b36d9640e" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B333.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B333.png"
          /></a>
        </figure>
        <figure id="3997f4b8-ce6d-4d51-bb19-e989a709b53b" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B334.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B334.png"
          /></a>
        </figure>
        <figure id="ad84d267-0b19-4630-90cc-b5b0e1bc425f" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B335.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B335.png"
          /></a>
        </figure>
        <figure id="a0701a8e-e0f7-4642-9f8d-d46861a7e531" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B336.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B336.png"
          /></a>
        </figure>
        <figure id="64c6913a-ac9d-442e-8d5c-63255397208f" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B337.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B337.png"
          /></a>
        </figure>
        <figure id="d5607fd5-92df-448a-8cb6-4bee477bffa8" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B338.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B338.png"
          /></a>
        </figure>
        <figure id="43bfb76b-a97f-4930-9fc7-40534793c4e8" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B339.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B339.png"
          /></a>
        </figure>
        <figure id="550a1581-8a23-427c-82a5-944b3ef2c87d" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B340.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B340.png"
          /></a>
        </figure>
        <figure id="3e00bf53-2303-4bf5-abc9-8335434bea84" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B341.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B341.png"
          /></a>
        </figure>
        <figure id="e9f1817f-cb71-45f1-90dd-f0071011d0a5" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B342.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B342.png"
          /></a>
        </figure>
        <figure id="ba3b97ea-985d-45bb-94da-8281f892eecb" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B344.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B344.png"
          /></a>
        </figure>
        <figure id="4745e4db-6074-42be-b04c-4ba1d9b7cbab" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B345.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B345.png"
          /></a>
        </figure>
        <figure id="5b7c8e7e-f630-4ca1-96da-4e6a3c9fa363" class="image">
          <a
            href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B346.png"
            ><img
              style="width: 1920px"
              src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/%25E1%2584%2589%25E1%2585%25B3%25E1%2586%25AF%25E1%2584%2585%25E1%2585%25A1%25E1%2584%258B%25E1%2585%25B5%25E1%2584%2583%25E1%2585%25B346.png"
          /></a>
        </figure>
        <p id="604ad3b6-968d-4d43-bc8b-9e0e3c36c907" class=""></p>
        <h3 id="ba11b5c9-2057-40e6-bad2-cf5e16ffe06b" class="">
          🖥️서비스 개발 후 영상 캡쳐 모습:
        </h3>
        <figure id="22945581-0629-4e76-9e69-b68b1f234daa">
          <div class="source">
            <a
              href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/valto_web_%25E1%2584%258B%25E1%2585%25A7%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25BC.mp4"
              >https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b73cdd76-0f84-4f0f-9fc6-7523b8690da5/valto_web_%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mp4</a
            >
          </div>
        </figure>
        <figure id="3177e577-1984-450b-8cde-bc404a87cdfa">
          <a
            href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b73cdd76-0f84-4f0f-9fc6-7523b8690da5/valto_web_%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20221212T144252Z&amp;X-Amz-Expires=86400&amp;X-Amz-Signature=474bf18d8944724d674c2a5d07b6103cd40dee554d46b1dc4431ef96eaea9be0&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=filename%3D%22valto%2520web%2520%25E1%2584%258B%25E1%2585%25A7%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25BC.mp4%22&amp;x-id=GetObject"
            class="bookmark source"
            ><div class="bookmark-info">
              <div class="bookmark-text">
                <div class="bookmark-title"></div>
              </div>
              <div class="bookmark-href">
                https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b73cdd76-0f84-4f0f-9fc6-7523b8690da5/valto_web_%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221212%2Fus-west-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20221212T144252Z&amp;X-Amz-Expires=86400&amp;X-Amz-Signature=474bf18d8944724d674c2a5d07b6103cd40dee554d46b1dc4431ef96eaea9be0&amp;X-Amz-SignedHeaders=host&amp;response-content-disposition=filename%3D%22valto%2520web%2520%25E1%2584%258B%25E1%2585%25A7%25E1%2586%25BC%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25BC.mp4%22&amp;x-id=GetObject
              </div>
            </div></a
          >
        </figure>
        <p id="48d12922-1076-4061-8514-6bcfce1844c8" class="">
          <mark class="highlight-gray"
            >* 영상이 정상적으로 재생되지 않는다면, 위의 url로
            접속해주세요.</mark
          >
        </p>
        <p id="eaa58d33-1750-4ead-8130-b64fde4a0dcc" class=""></p>
        <hr id="ceef082c-dc9c-474e-942a-ec3fa0e1f4c9" />
        <h3 id="048fcef9-f607-4726-af91-8b7f6ec7e5cb" class="">
          ⚒️담당 개발 내역:
        </h3>
        <p id="b0c6613c-9b93-43c6-8d8e-5978b89f75a3" class="">
          <strong>Back-end development</strong>
        </p>
        <ul id="902da3ae-e560-4982-bace-554b2710bc55" class="bulleted-list">
          <li style="list-style-type: disc">
            Django framework 프로젝트 초기 셋팅, 빌드
          </li>
        </ul>
        <ul id="8d69a186-e4c9-41e2-bf41-32e327e15a42" class="bulleted-list">
          <li style="list-style-type: disc">
            Vultr cloud server 환경 설정,
            <a href="http://valto.shop">http://valto.shop</a> 도메인 DNS 설정
          </li>
        </ul>
        <ul id="c9ce9835-4802-432b-88a4-6bc7100006f4" class="toggle">
          <li>
            <details open="">
              <summary>네이버 간편 로그인 기능</summary>
              <p id="3eb2bb9f-5aa2-47cd-8862-493d37fe221f" class="">
                <strong>구현된 화면: (</strong
                ><a href="http://valto.shop/common/login%29"
                  ><strong>http://valto.shop/common/login</strong></a
                ><strong> )</strong>
              </p>
              <figure id="4f30bcc8-7f4a-4132-89e6-5cfb58a1483c" class="image">
                <a
                  href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled.png"
                  ><img
                    style="width: 773px"
                    src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled.png"
                /></a>
              </figure>
              <p id="3a9ba1e6-efd5-4f03-89f1-22c1787ddf0c" class="">
                <strong>NAVER API토큰을 발급받아 서버와 통신 key설정</strong>
              </p>
              <figure id="b51489f2-3438-4e18-baff-70e745871652" class="image">
                <a
                  href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%201.png"
                  ><img
                    style="width: 602px"
                    src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%201.png"
                /></a>
              </figure>
              <p id="f7cf1c30-17f9-4d79-a4d0-4a9da3616c5b" class="">
                대학 커뮤니티(애브리타임), 소셜미디어(인스타그램), 네이버 스마트
                스토어를 주된 홍보 및 유입 플랫폼으로 선정하였기에, 고객이
                “스마트폰”으로 사이트에 접속할 확률이 높다고 예상하였습니다.
                이에 따라 사이트 자체적으로 회원 기본 정보를 입력받고 “회원가입”
                후 로그인을 하게 되면 고객이 구매를 위해 감수해야 하는 불편이
                늘어난다고 판단하여, “네이버 간편 로그인 API”를 웹 사이트에
                적용하였습니다.
              </p>
              <p id="c06b7de1-48a2-4816-8623-2de7a81ba5b8" class="">
                네이버 간편 로그인을 통해 고객은 스마트폰에 등록된 네이버 계정을
                통해 1초만에 로그인할 수 있으며, 네이버 스마트 스토어도 추가적인
                로그인 없이 저희 웹 사이트와 자유롭게 이동하며 개인의 구매내역을
                확인할 수 있는 효과를 가졌습니다.
              </p>
              <p id="7cce3da0-013e-46d7-8e6f-2fc957e6f7a3" class="">
                결과적으로 실제 구매한 100%의 고객이 네이버 간편 로그인으로
                로그인하여 일반 회원가입보다 선호하는 로그인 유형임을 확인할 수
                있었습니다.
              </p>
            </details>
          </li>
        </ul>
        <ul id="398e3712-d404-44ef-b1af-025c29ed2831" class="bulleted-list">
          <li style="list-style-type: disc">구매프로세스 기능 구현</li>
        </ul>
        <ul id="d4071e19-c796-4c05-a06b-b065f38588d4" class="bulleted-list">
          <li style="list-style-type: disc">
            고객 프로젝트 동참 유도를 위한 시각화된 데이터 노출
            <ul id="8639ab03-00d4-42a0-a643-d3c26d3a4551" class="toggle">
              <li>
                <details open="">
                  <summary>
                    1) 유기동물 실태의 심각성 전달을 위한 차트 활용 + 현재
                    판매액 표기
                  </summary>
                  <figure
                    id="6ea79d9a-17a4-4b61-82bc-197d7c836ada"
                    class="image"
                  >
                    <a
                      href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%202.png"
                      ><img
                        style="width: 506px"
                        src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%202.png"
                    /></a>
                  </figure>
                  <p id="3416f878-6d9e-4247-ab46-833416fd2212" class="">
                    대중에게 유기동물의 실태에 대한 심각성을 글만으로
                    알리기보다는 구체적인 수치와 함께 동적 기능이 담긴 차트로
                    표현했습니다.
                  </p>
                  <p id="83c130f9-e169-4d32-ad96-18085fab7155" class="">
                    이에 더하여 저희 프로젝트의 목표 금액과 고객이 구매한 총
                    금액을 실시간으로 연산하여 그 수치를 메인 페이지에
                    막대그래프로 표현했습니다.
                  </p>
                </details>
              </li>
            </ul>
            <ul id="0bb79713-6a7f-4df9-9155-e6be490443d9" class="toggle">
              <li>
                <details open="">
                  <summary>
                    2) 타인의 관심도를 노출하기 위한 코멘트 노출
                  </summary>
                  <figure
                    id="db5b725c-4011-4ad0-ae0d-1fb1ad39c672"
                    class="image"
                  >
                    <a
                      href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%203.png"
                      ><img
                        style="width: 722px"
                        src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%203.png"
                    /></a>
                  </figure>
                  <p id="a339b62e-c5a1-4998-88a3-944a4579981a" class="">
                    고객이 입력한 코멘트 중 랜덤으로 3개의 데이터를 추출하여
                    메인 페이지에 노출
                  </p>
                  <p id="62734b57-588b-4e09-bb37-6aaf26d40b55" class="">
                    프로젝트에 대한 사람들의 관심도를 시각적으로 보여주어 나도
                    참여해볼까? 하는 군중심리를 위한 기능
                  </p>
                </details>
              </li>
            </ul>
          </li>
        </ul>
        <ul id="762d39bf-d9d6-4b08-b709-44880ef112f3" class="toggle">
          <li>
            <details open="">
              <summary>사용자 개인의 구매내역 확인 기능</summary>
              <figure id="19210e59-59ce-4576-901e-0e5946d28874" class="image">
                <a
                  href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%204.png"
                  ><img
                    style="width: 594px"
                    src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%204.png"
                /></a>
              </figure>
              <p id="47a6a9db-8ed4-4ad6-bea1-012bd324dff6" class="">
                구매한 고객들이 자신의 주문이 제대로 입력된 것인지 바로 확인이
                되지 않아 주문의 접수여부와 배송 상태를 확인할 수 없어서
                불편하다는 의견이 집계되었습니다.
              </p>
              <p id="e05418a4-a318-4469-9832-bb67492fc042" class="">
                이에 따라 저희 팀은 최대한의 고객 편의 제공을 위해, “주문상태”
                와 “배송상태”를 실시간으로 주문 내역에서 확인할 수 있도록
                사이트를 설계했습니다. 이때 주문 내역은 최근의 주문 3건이
                노출되며 구매 정보(구매일시, 상품, 구매인, 연락처, 배송주소)와
                주문상태, 배송상태를 조회할 수 있게 구축했습니다.
              </p>
            </details>
          </li>
        </ul>
        <ul id="d2d12b28-0867-49ce-bae1-346aea5c1272" class="bulleted-list">
          <li style="list-style-type: disc">
            마케팅 및 관리, 회계 처리 지원 프로세스
            <ul id="4a1f423f-c1af-4151-8d4d-8f8ab4597f52" class="toggle">
              <li>
                <details open="">
                  <summary>1) 마케팅 분석용: 페이지 별 유입량 측정</summary>
                  <p id="fc91539c-a107-4ebc-964d-4c524234319c" class="">
                    <strong>분석 대상 웹 페이지:</strong>
                  </p>
                  <p id="237a4960-32af-47d3-b69d-e035f9a89301" class="">
                    메인 페이지(홈페이지) / 프로젝트 소개 / 상품 소개 / 구매
                    선택 창 / 카드결제 / 계좌이체
                  </p>
                  <p id="5d93a5a8-1e2b-4ac8-b04e-8922be616018" class=""></p>
                  <p id="6271f81e-2b90-4faf-8885-2604e53b4020" class="">
                    <strong>구체적인 방법:</strong>
                  </p>
                  <p id="e321e19d-55ba-41aa-8c1e-ba966682d2d5" class="">
                    각 파트별로 유입되는 트래픽(유입 수)를 DB에 매일 따로 객체를
                    만들어 기록하고 EXCEL로 일자 별 페이지마다의 유입량을 비교
                    분석할 수 있게 사이트의 알고리즘을 수정했습니다.
                  </p>
                  <p id="fa94c08c-74d0-4096-85c8-9764d38f4cff" class=""></p>
                  <p id="595a9cf1-b56e-4dcd-9728-2e49a5adcc89" class="">
                    <strong></strong>
                  </p>
                  <p id="c6911fff-40a7-478d-b3f3-da4010548678" class="">
                    <strong
                      >관리자 페이지(valto.shop/admin)에 노출되는 화면 </strong
                    ><strong>* 21.12.11의 유입량 통계</strong>
                  </p>
                  <figure
                    id="e418e085-ed9c-46f3-853d-b43685de1555"
                    class="image"
                  >
                    <a
                      href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%205.png"
                      ><img
                        style="width: 752px"
                        src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%205.png"
                    /></a>
                  </figure>
                  <pre
                    id="f8bde7d3-259a-4fa5-ac99-0fb0b232ddb7"
                    class="code"
                  ><code>#마케팅 분석용
class Inflow(models.Model):
    created = models.DateField(auto_now_add=True)  # 작성시간
    home_page=models.IntegerField(blank=True) # 1. 홈페이지 유입수
    product_page=models.IntegerField(blank=True) # 2. 제품창 유입수
    select_pay_option_page=models.IntegerField(blank=True) # 3. 주문결제유형 창 유입수
    pay_by_card=models.IntegerField(blank=True) # 4. 카드결제 창 유입수
    pay_by_cash=models.IntegerField(blank=True) # 5. 계좌이체 창 유입수
    about_us_page=models.IntegerField(blank=True)  # 6. 캠페인 취지 창 유입수</code></pre>
                </details>
              </li>
            </ul>
            <ul id="9dc740d8-1699-49bc-a439-5eb02d052fd7" class="toggle">
              <li>
                <details open="">
                  <summary>
                    2) 관리 및 회계 처리 지원: 구매정보, 유입량DB를 Excel로
                    반환하고, 데이터 분석 자동화 처리
                  </summary>
                  <p id="ea7b63bb-e9e6-4945-88fb-6d3719d59489" class="">
                    구매정보, 유입량을 관리자 페이지(<a
                      href="http://valto.shop/admin%29%EC%97%90%EC%84%9C"
                      >http://valto.shop/admin</a
                    >
                     )에서 확인하고 DB를 수정할 수 있습니다. 그렇지만 하기
                    사진들과 같이 이름과 객체 명만으로는 정확히 어떤 주문, 어느
                    날에 유입량이 얼마나 되는 지 명확하게 식별할 수 없었고
                    Mysql을 사용하는 “코드로 DB조작”이 아닌, 웹 페이지에서
                    마케팅 성과 측정 및 판매 관리를 하기에 어려움이 있을 것이라
                    판단했습니다.
                  </p>
                  <figure
                    id="5b5f1611-f9ee-41f8-a71e-feaf62d0ffd4"
                    class="image"
                  >
                    <a
                      href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%206.png"
                      ><img
                        style="width: 773px"
                        src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%206.png"
                    /></a>
                  </figure>
                  <p id="9366d95b-8188-47db-b25d-daed2c5e6a29" class="">
                    따라서 웹 사이트 런칭 전부터 위와 같은 불편함을
                    최소화하고자, 모든 DB를 EXCEL로 다운로드 받을 수 있게 코드를
                    설계했습니다. 나아가 다운받은 EXCEL을 연산 함수로 모든 판매
                    이력, 구매 통계를 하나의 표로 확인할 수 있도록 함수를
                    설정해, 자동적으로 분석을 할 수 있게 만들었습니다.
                  </p>
                  <figure
                    id="468eecc6-dadd-48c4-8568-61dd9f13d09a"
                    class="image"
                  >
                    <a
                      href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%207.png"
                      ><img
                        style="width: 773px"
                        src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%207.png"
                    /></a>
                  </figure>
                  <figure
                    id="0f05f447-8e50-4b12-99c3-93ab15b90892"
                    class="image"
                  >
                    <a
                      href="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%208.png"
                      ><img
                        style="width: 773px"
                        src="VALTO(Value%20Together)%20caf73596d159478bb272eb6b3f082fae/Untitled%208.png"
                    /></a>
                  </figure>
                </details>
              </li>
            </ul>
          </li>
        </ul>
        <p id="b5d6e4e0-9802-4a7b-9857-2a7423e29904" class=""></p>
        <hr id="db695df1-b139-4b94-8860-f41f9cd64cfc" />
        <h3 id="2f4e9f3d-c323-40cf-b291-2fc6421e9b6e" class="">✏️회고록</h3>
        <p id="40f9b252-bf3d-4a51-98be-e2e5f3a5f10e" class="">
          GBT학부에서 기획과 마케팅을, 컴퓨터공학부에서 프로그래밍을 공부하면서
          그동안 배운 모든 것들을 활용해서 학우들과 직접 기획하고 실행해볼 수
          있었던 뜻 깊은 기회가 되었습니다.
        </p>
        <p id="5e7ac7ad-69ae-4a3b-b52c-1524e42b2685" class="">
          학기 중에 다들 학업과 대외활동 및 아르바이트 등 각자의 일정이 있었기에
          최대한 체계적으로 기간별로 계획을 수립하고 업무를 분배했지만, 늘
          그렇듯 프로젝트라는 것이 처음 계획한 대로 진행되지는 않았습니다.
          생각하지도 못했던 문제가 발생하고 쉬울 것이라 생각했던 부분도 직접
          부딪혀보고 개발해보니 예상보다 많은 시간과 노력이 소요되었습니다.
          그럼에도 불구하고 문제 상황에 대해 팀장, 팀원들과 의견을 조율하고
          새로운 대안을 찾아 최대한 프로젝트의 본질을 살리고, 이용자(고객)이
          편할 수 있도록 노력하여 3주라는 짧은 런칭 기간 대비 좋은 성과를 거둘
          수 있었습니다.
        </p>
        <p id="09d5adc8-b73c-4816-94d5-7256f83b757f" class="">
          각자 맡은 역할에 최선을 다해준 팀원들과 저희를 응원하며 도와주신
          지도교수님께 감사드립니다.
        </p>
        <p id="aebcb1f4-031c-4dd6-a834-08c6fdcfc77c" class=""></p>
        <hr id="1047e769-c551-4c09-88a4-999f012b63de" />
        <h3 id="c82f21f4-ee4a-4297-87ce-c64031f948eb" class="">
          🗂️새롭게 배운 점
        </h3>
        <p id="240a7a67-4d1e-4b5f-82a8-b577a394d8cc" class="">
          <strong>1) 개인 프로젝트와 팀 프로젝트의 차이</strong>
        </p>
        <p id="a1ec9ed4-8bba-49f0-8a10-fad61377868c" class="">
          github를 활용한 협업 툴
        </p>
        <p id="1c66e652-398e-4f2c-aa54-5e0d59c5e076" class="">
          각 각의 분야와 기획 의도를 명확히 알기
        </p>
        <p id="d65b3cf2-6092-455b-a74a-e82921d41417" class="">
          상호 간 프로세스와 전반적인 기술스택에 대한 개념적 이해의 필요성
        </p>
        <p id="aa8eac8b-1343-4e7a-98f2-e44a0162b03d" class="">
          팀원 간의 협동력 및 배려심의 중요성
        </p>
        <p id="1beca70f-94bc-4d02-8941-02e501048433" class=""></p>
        <p id="a3ccc9e7-816c-40dc-b57b-f307235c5a7e" class="">
          <strong>2) 프로젝트를 통해 깨달은 저의 장점과 단점</strong>
        </p>
        <p id="0f0ea41b-ffcd-4278-a2fe-4c1508ac9140" class="">
          <strong>장점:</strong>
        </p>
        <p id="09c4d235-d9a0-4d54-a2b4-c0e8651dd1d1" class="">
          1)서비스의 핵심을 분석하여 기능과 특징에 대한 우선순위를 매겨
          체계적으로 처리하는 능력
        </p>
        <p id="35b9114c-046e-49cf-84f2-19e34a5ce61e" class="">
          2)서비스 구현을 위한 최선의 리소스와 기능 활용을 위한 판단력과 기획력
        </p>
        <p id="f6d09694-4478-41f0-810f-b92c797f55e7" class=""></p>
        <p id="f3853f97-f121-415b-b3f0-56b452d40798" class="">
          <strong>단점:</strong>
        </p>
        <p id="6ffc189b-d0ab-4f55-87e1-35d91df8bd6e" class="">
          1)프로젝트 일정이 급격하게 몰리면 심리적 부담감을 느껴 스트레스를 많이
          받는다는 점
        </p>
        <p id="0c625e3f-5e12-4495-a208-8fbe81e8b8a0" class="">
          2)기술적인 스택에 대한 지식의 부족
        </p>
        <p id="6a138478-1c63-4c3c-a910-326b95efe956" class="">
          * 결제 연동 API나 프론트 단에서 JS를 활용하여 비동기식 데이터처리를
          원활히 구현하지 못한 점에 대한 아쉬움이 남아, 네트워크와 JS공부를 해볼
          예정입니다.
        </p>
        <p id="7f590ba8-b41a-4372-b59f-fc1dad3865c8" class=""></p>
        <p id="7511b097-5064-4d8d-a9bc-bd9f838ba450" class="">
          <strong>3) 서비스에서 중요한 점</strong>
        </p>
        <p id="f0ba77ba-69bc-4ee1-9855-2d6a716df146" class="">
          개발을 잘했느냐도 물론 중요한 요인이 될 수 있겠지만, 솔직히
          &quot;서비스의 가치&quot;가 가장 중요한 포인트라고 생각되었습니다.
          이후에 서비스의 본질과 장점을 살릴 수 있고, 사용자 친화적인 개발을
          통해 서비스가 런칭되었을 때 기획한 서비스가 빛을 볼 수 있는 것
          같았습니다. 여기에 더해서 적시적소에 시행된 마케팅과 고객 경험을 위한
          운영 관리 및 피드백을 반영한 지속적인 업데이트도 필요함을 느낄 수
          있었습니다.
        </p>
        <p id="df024901-3e0a-460e-b91a-cfaacd855b6a" class=""></p>
        <p id="9463d88e-ac79-4899-ac5d-e0e7e4a337b6" class="">
          <strong
            >서비스의 가치 → 서비스의 본질과 장점을 살리며, 사용자 친화적인
            서비스의 개발 → 운영 관리, 업데이트</strong
          >
        </p>
        <p id="7803d52f-e322-4634-b4c4-82c0997b7a0e" class="">
          모두 이루어졌을 때 성공할 수 있다는 것을 다시 한번 느낄 수 있었던
          프로젝트였습니다.
        </p>
        <p id="c66a3d78-af38-445b-a432-3d05e2bbac99" class=""></p>
        <hr id="9de2a26e-575f-4fe9-9f8b-5fb4ce67c02f" />
        <p id="3e04c02f-ab13-45be-bcee-030d21b161b8" class=""></p>
      </div>
    </article>
  </body>
</html>
`;

  return result;
}
