import I from "@iconify-icons/material-symbols/folder-special-outline-sharp.js";
import { Icon } from "@iconify/react/dist/offline";
import React, { useContext, useEffect } from "react";

function Component({ show }) {
	return (
		<div className={styles.navbar}>
			<Icon icon={I} />
		</div>
	);
}

export default Component;
