<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dbgn42lxswgifp' );

/** Database username */
define( 'DB_USER', 'u51cjxz6ozecz' );

/** Database password */
define( 'DB_PASSWORD', 'f4bspfizzhs2' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'rqo3X%OU>xqqwm:KX4bQ83*|K3O)r&1lr(jGAvmwp+NkG#QXt1o0uk<})tL@dn{;' );
define( 'SECURE_AUTH_KEY',   ':#j8N$v)FO:D^Y%bUZ.B:IyFiunguJ){<o^0QI^bAJn43ry]{KVmjE*BAgUHqz^ ' );
define( 'LOGGED_IN_KEY',     'ec*&;MaC8+8/<N($:[NB!./nP@T#]B~na#o;EVIf*+XZQr6C*Oh,|0@3{Fp4c.@W' );
define( 'NONCE_KEY',         '>|Avzd[jK=;g}Hd,.e>p!Vv4ILVsU89}3K.,1v{cvA7b*P%8.=rH[-veI<2Jp9~?' );
define( 'AUTH_SALT',         '+g2!3@na4ieFx8`DOp`DhrarsA[p[]@a4Fx|qB7?60(zx#d^9<cVk{4gBF{pJsVn' );
define( 'SECURE_AUTH_SALT',  'mU[-1FO+ubYHF/ p?>*&}K_Iy3fYQ/YNh^/YN?z?9)rv&5{{_J?p[ WqqT$9YM~L' );
define( 'LOGGED_IN_SALT',    '9}l7tL4(AM:(gFP,zQw/.%*R05RPZIfl9_yb%3798n=)nhLJd#rI6byd<H^(k|qK' );
define( 'NONCE_SALT',        'Dz<-h=CX{a`I6;cY*T1FomVOCbygTX~PYtKq4jxn$L:nLHwOjUz6{7r*eC_-Y$bS' );
define( 'WP_CACHE_KEY_SALT', 'F4.eH8uy%OYIata:jZQ4U<mxL~ GVm~OtU$drrU}ls?&Vk<Eee1o&W2gpN[rZo|0' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ttu_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
@include_once('/var/lib/sec/wp-settings-pre.php'); // Added by SiteGround WordPress management system
require_once ABSPATH . 'wp-settings.php';
@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system
