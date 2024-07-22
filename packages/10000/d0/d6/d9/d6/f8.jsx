import React, { useContext, useEffect } from 'react'
  import I from '@iconify-icons/material-symbols/night-sight-auto-sharp.js'
  import { Icon } from '@iconify/react/dist/offline';
  
  function Component({ show }) {
  
    return (
      <div className={styles.navbar}>
        
        
				<Icon
					icon={I}
				/>
      </div>
    )
  }
  
  export default Component