APPINFO_JSON = {u'sdkVersion': u'3', u'uuid': u'133215f0-cf20-4c05-997b-3c9be5a64e5b', u'appKeys': {}, u'companyName': u'Meiguro', u'targetPlatforms': [u'aplite', u'basalt', u'chalk'], u'capabilities': [u'configurable'], u'versionLabel': u'0.4', u'longName': u'Pebble.js', u'versionCode': 1, u'shortName': u'Pebble.js', u'watchapp': {u'watchface': False}, u'resources': {u'media': [{u'menuIcon': True, u'type': u'bitmap', u'name': u'IMAGE_MENU_ICON', u'file': u'images/menu_icon.png'}, {u'type': u'bitmap', u'name': u'IMAGE_LOGO_SPLASH', u'file': u'images/logo_splash.png'}, {u'type': u'bitmap', u'name': u'IMAGE_TILE_SPLASH', u'file': u'images/tile_splash.png'}, {u'type': u'font', u'name': u'MONO_FONT_14', u'file': u'fonts/UbuntuMono-Regular.ttf'}]}}
AR = 'arm-none-eabi-gcc-ar'
ARFLAGS = 'rcs'
AS = 'arm-none-eabi-gcc'
BINDIR = '/usr/local/bin'
BUILD_DIR = 'basalt'
CC = ['arm-none-eabi-gcc']
CCLNK_SRC_F = []
CCLNK_TGT_F = ['-o']
CC_NAME = 'gcc'
CC_SRC_F = []
CC_TGT_F = ['-c', '-o']
CC_VERSION = ('4', '7', '2')
CFLAGS = ['-mcpu=cortex-m3', '-mthumb', '-ffunction-sections', '-fdata-sections', '-g', '-fPIE', '-Os', '-D_TIME_H_', '-Wall', '-Wextra', '-Werror', '-Wno-unused-parameter', '-Wno-error=unused-function', '-Wno-error=unused-variable', '-std=c11', '-fms-extensions', '-Wno-address', '-Wno-type-limits', '-Wno-missing-field-initializers']
CFLAGS_MACBUNDLE = ['-fPIC']
CFLAGS_cshlib = ['-fPIC']
CPPPATH_ST = '-I%s'
DEFINES = ['RELEASE', 'PBL_PLATFORM_BASALT', 'PBL_COLOR', 'PBL_RECT', 'PBL_MICROPHONE', 'PBL_SMARTSTRAP', 'PBL_HEALTH', 'PBL_SDK_3']
DEFINES_ST = '-D%s'
DEST_BINFMT = 'elf'
DEST_CPU = 'arm'
DEST_OS = 'darwin'
INCLUDES = ['basalt']
LD = 'arm-none-eabi-ld'
LIBDIR = '/usr/local/lib'
LIBPATH_ST = '-L%s'
LIB_ST = '-l%s'
LINKFLAGS = ['-mcpu=cortex-m3', '-mthumb', '-Wl,--gc-sections', '-Wl,--warn-common', '-fPIE', '-Os']
LINKFLAGS_MACBUNDLE = ['-bundle', '-undefined', 'dynamic_lookup']
LINKFLAGS_cshlib = ['-shared']
LINKFLAGS_cstlib = ['-Wl,-Bstatic']
LINK_CC = ['arm-none-eabi-gcc']
PBW_BIN_DIR = 'basalt'
PBW_NAME = 'tennis-poc.pbw'
PEBBLE_SDK_COMMON = '/Users/Gon/Library/Application Support/Pebble SDK/SDKs/current/sdk-core/pebble/common'
PEBBLE_SDK_PLATFORM = '/Users/Gon/Library/Application Support/Pebble SDK/SDKs/current/sdk-core/pebble/basalt'
PEBBLE_SDK_ROOT = '/Users/Gon/Library/Application Support/Pebble SDK/SDKs/current/sdk-core/pebble'
PLATFORM = {'PBW_BIN_DIR': 'basalt', 'TAGS': ['basalt', 'color', 'rect'], 'ADDITIONAL_TEXT_LINES_FOR_PEBBLE_H': [], 'MAX_APP_BINARY_SIZE': 65536, 'MAX_RESOURCES_SIZE': 1048576, 'MAX_APP_MEMORY_SIZE': 65536, 'MAX_WORKER_MEMORY_SIZE': 10240, 'NAME': 'basalt', 'BUILD_DIR': 'basalt', 'MAX_RESOURCES_SIZE_APPSTORE': 262144, 'DEFINES': ['PBL_PLATFORM_BASALT', 'PBL_COLOR', 'PBL_RECT', 'PBL_MICROPHONE', 'PBL_SMARTSTRAP', 'PBL_HEALTH']}
PLATFORM_NAME = 'basalt'
PREFIX = '/usr/local'
RESOURCES_JSON = [{u'menuIcon': True, u'type': u'bitmap', u'name': u'IMAGE_MENU_ICON', u'file': u'images/menu_icon.png'}, {u'type': u'bitmap', u'name': u'IMAGE_LOGO_SPLASH', u'file': u'images/logo_splash.png'}, {u'type': u'bitmap', u'name': u'IMAGE_TILE_SPLASH', u'file': u'images/tile_splash.png'}, {u'type': u'font', u'name': u'MONO_FONT_14', u'file': u'fonts/UbuntuMono-Regular.ttf'}]
RPATH_ST = '-Wl,-rpath,%s'
SDK_VERSION_MAJOR = 5
SDK_VERSION_MINOR = 78
SHLIB_MARKER = None
SIZE = 'arm-none-eabi-size'
SONAME_ST = '-Wl,-h,%s'
STLIBPATH_ST = '-L%s'
STLIB_MARKER = None
STLIB_ST = '-l%s'
TARGET_PLATFORMS = ['chalk', 'basalt', 'aplite']
TIMESTAMP = 1463588533
cprogram_PATTERN = '%s'
cshlib_PATTERN = 'lib%s.so'
cstlib_PATTERN = 'lib%s.a'
macbundle_PATTERN = '%s.bundle'
